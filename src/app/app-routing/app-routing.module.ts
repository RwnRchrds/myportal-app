import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {UserTypeGuard} from "../shared/guards/user-type.guard";
import {UserType} from "../shared/models/auth/userType";
import {LoginGuard} from "../shared/guards/login.guard";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'staff',
    loadChildren: () => import('../staff/metronic/layout/layout.module').then(m => m.LayoutModule),
    data: {userType: UserType.Staff},
    canLoad: [UserTypeGuard]
  },
  {
    path: 'student',
    loadChildren: () => import('../student/metronic/layout/layout.module').then(m => m.LayoutModule),
    data: {userType: UserType.Student},
    canLoad: [UserTypeGuard]
  },
  {
    path: 'parent',
    loadChildren: () => import('../parent/metronic/layout/layout.module').then(m => m.LayoutModule),
    data: {userType: UserType.Parent},
    canLoad: [UserTypeGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
