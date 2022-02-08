import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {LoginModel} from "../../models/auth/loginModel";
import {GetTokenRequestModel} from "../../models/request/getTokenRequestModel";
import {RefreshTokenRequestModel} from "../../models/request/refreshTokenRequestModel";
import {catchError, Observable, throwError} from "rxjs";
import {GetTokenResponseModel} from "../../models/response/getTokenResponseModel";
import {AppError} from "../../errors/appError";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class TokenService extends ApiService {

  getTokenWithCredentials(credentials: LoginModel): Observable<GetTokenResponseModel> {
    let requestModel = new GetTokenRequestModel(credentials);

    let payload = requestModel.toHttpParams();

    return this.http.post<GetTokenResponseModel>(`${this.basePath}/connect/token`, payload).pipe(catchError((error: HttpErrorResponse) => {
      if (error.error.error_description === "invalid_username_or_password") {
        return throwError(() => new AppError(error, 'Invalid username or password.'));
      }
      else {
        return throwError(() => new AppError(error, error.message));
      }
    }));
  }

  getTokenWithRefreshToken(refreshToken: string): Observable<GetTokenResponseModel> {
    let requestModel = new RefreshTokenRequestModel(refreshToken);

    let payload = requestModel.toHttpParams();

    return this.http.post<GetTokenResponseModel>(`${this.basePath}/connect/token`, payload).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(() => new AppError(error, error.message));
    }));
  }
}
