import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/app/auth.service";
import {UserType} from "../models/auth/userType";

@Injectable({
  providedIn: 'root'
})
export class UserTypeGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthenticated()) {
      return false;
    }

    let userType = route.data['userType'] as UserType;
    let token = this.authService.getToken();

    return token.type === userType;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthenticated()) {
      return false;
    }

    let userType = route.data['userType'] as UserType;
    let token = this.authService.getToken();

    return token.type === userType;
  }

}
