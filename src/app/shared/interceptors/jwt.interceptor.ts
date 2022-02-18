import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, map, Observable, switchMap, throwError} from 'rxjs';
import {AuthService} from "../services/app/auth.service";
import {AppError} from "../errors/appError";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  private isRefreshing = false;

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = this.injectToken(request);

    return next.handle(authReq).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && !authReq.url.includes('connect/token') && error.status === 401) {
        return this.refreshToken(authReq, next);
      }
      else if (error.error instanceof String || typeof error.error === 'string') {
        let appError = new AppError(error, error.error);
        return throwError(() => appError);
      }
      return throwError(() => error);
    }))
  }

  private refreshToken(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      if (this.authService.isAuthenticated()) {
        return this.authService.refreshToken().pipe(switchMap((result: boolean) => {
          this.isRefreshing = false;
          return next.handle(this.injectToken(request));
        }), catchError((err) => {
          this.isRefreshing = false;
          this.authService.logout();
          return throwError(() => err);
        }));
      }
    }
    return next.handle(this.injectToken(request));
  }

  injectToken(request: HttpRequest<unknown>): HttpRequest<unknown> {
    if (this.authService.isAuthenticated()) {
      let token = this.authService.getToken();
      return request.clone({setHeaders: {Authorization: `Bearer ${token.accessToken}`}});
    }
    return request;
  }
}
