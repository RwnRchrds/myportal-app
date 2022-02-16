import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/app/auth.service";
import {UserType} from "../models/auth/userType";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      let token = this.authService.getToken();
      switch (token.type) {
        case UserType.Staff:
          this.router.navigate(['staff/home']);
          return false;
        case UserType.Student:
          this.router.navigate(['student/home']);
          return false;
        case UserType.Parent:
          this.router.navigate(['parent/home']);
          return false;
        default:
          return false;
      }
    }
    return true;
  }

}
