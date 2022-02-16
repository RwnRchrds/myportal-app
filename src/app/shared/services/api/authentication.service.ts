import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {catchError, Observable, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {AppError} from "../../errors/appError";
import {LoggedInUserModel} from "../../models/auth/loggedInUserModel";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends ApiService {
  getUserInfo(): Observable<LoggedInUserModel> {
    return this.http.get<LoggedInUserModel>(`${this.basePath}/api/auth/userInfo`).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(() => new AppError(error, error.message));
    }));
  }
}
