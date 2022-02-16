import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from "../services/app/auth.service";

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredPermissions = route.data['requiredPermissions'] as number[];

    //If route has no required permissions, allow the user to proceed
    if (!requiredPermissions) {
      return true;
    }
    else {
      let user = this.authService.getUser();
      if (user != null && requiredPermissions.some(p => user.permissions.includes(p))) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
    }
  }

}
