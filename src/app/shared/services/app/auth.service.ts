import {Injectable} from '@angular/core';
import {TokenService} from "../api/token.service";
import {LoginModel} from "../../models/auth/loginModel";
import {catchError, map, Observable, of, throwError, lastValueFrom} from "rxjs";
import {GetTokenResponseModel} from "../../models/response/getTokenResponseModel";
import {StoredToken} from "../../models/auth/storedToken";
import {HttpErrorResponse} from "@angular/common/http";
import {AppError} from "../../errors/appError";
import {UserTypes} from "../../models/auth/userTypes";
import {LoggedInUserModel} from "../../models/auth/loggedInUserModel";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: StoredToken;
  private user: LoggedInUserModel;

  constructor(private tokenService: TokenService) {
  }

  loadFromStorage(): void {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      this.token = token;

      // Do not need to refresh token immediately on app startup
      /*if (this.isAuthenticated() && !this.isTokenValid()) {
        this.refreshToken().pipe(map((response: boolean) => {
          if (!response) {
            this.logout();
          }
        }));
      }*/
    }
  }

  getToken(): StoredToken {
    return this.token;
  }

  getUserType(): UserTypes {
    if (!this.isAuthenticated()){
      return null;
    }
    return this.token.type;
  }

  isAuthenticated(): boolean {
    return (this.token != null)
  }

  isTokenValid(): boolean {
    var expireDate = new Date(this.token.expires);
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
