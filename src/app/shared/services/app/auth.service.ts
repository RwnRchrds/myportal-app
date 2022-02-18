import {Injectable} from '@angular/core';
import {TokenService} from "../api/token.service";
import {LoginModel} from "../../models/auth/loginModel";
import {catchError, map, Observable, of, throwError, lastValueFrom} from "rxjs";
import {GetTokenResponseModel} from "../../models/response/getTokenResponseModel";
import {StoredToken} from "../../models/auth/storedToken";
import {HttpErrorResponse} from "@angular/common/http";
import {AppError} from "../../errors/appError";
import {UserType} from "../../models/auth/userType";
import {LoggedInUserModel} from "../../models/auth/loggedInUserModel";
import {AuthenticationService} from "../api/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: StoredToken;
  private user: LoggedInUserModel;

  constructor(private tokenService: TokenService, private apiAuthService: AuthenticationService) {
  }

  loadFromStorage(): boolean {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      token.type = parseInt(token.type);
      this.token = token;
      return true;
      /*if (this.isAuthenticated()) {
        if (!this.isTokenValid()) {
          return this.refreshToken().pipe(map((response: boolean) => {
            if (!response) {
              this.logout();
              return false;
            }
            return true;
          }));
        }
        return true;
      }*/
    }
    return false;
  }

  getToken(): StoredToken {
    return this.token;
  }

  getUser(): LoggedInUserModel {
    return this.user;
  }

  updateUserInfo(): Observable<LoggedInUserModel> {
    return this.apiAuthService.getUserInfo().pipe(map((response: LoggedInUserModel) => {
      this.user = response;
      return response;
    }));
  }

  getUserType(): UserType {
    if (!this.isAuthenticated()) {
      return null;
    }
    return this.token.type;
  }

  isAuthenticated(): boolean {
    return (this.token != null)
  }

  isTokenValid(): boolean {
    let expireDate = new Date(this.token.expires);
    return this.isAuthenticated() && expireDate > new Date();
  }

  login(credentials: LoginModel): Observable<boolean> {
    return this.tokenService.getTokenWithCredentials(credentials).pipe(map((tokenResponse: GetTokenResponseModel) => {
      if (tokenResponse) {
        this.token = new StoredToken(tokenResponse);
        localStorage.setItem('token', JSON.stringify(this.token));
        return true;
      }
      return false;
    }), catchError((error: AppError) => {
      return throwError(() => error);
    }))
  }

  refreshToken(): Observable<boolean> {
    if (!this.token) {
      return throwError(() => new AppError(null, 'No user is currently logged in.'));
    }
    return this.tokenService.getTokenWithRefreshToken(this.token.refreshToken).pipe(map((tokenResponse: GetTokenResponseModel) => {
      if (tokenResponse) {
        this.token = new StoredToken(tokenResponse);
        localStorage.setItem('token', JSON.stringify(this.token));
        return true;
      }
      return false;
    }), catchError((error: HttpErrorResponse) => {
      return throwError(() => error);
    }))
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
  }
}
