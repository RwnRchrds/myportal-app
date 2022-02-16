import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StaffPortalComponent} from "../components/portal/staff-portal/staff-portal.component";
import {UserTypeGuard} from "../../shared/guards/user-type.guard";
import {UserType} from "../../shared/models/auth/userType";
import {StaffHomeComponent} from "../components/home/staff-home/staff-home.component";

const staffRoutes: Routes = [
  {
    path: 'staff',
    component: StaffPortalComponent,
    runGuardsAndResolvers: 'always',
    data: {userType: UserType.Staff},
    canActivate: [UserTypeGuard],
    children: [
      {
        path: 'home',
        component: StaffHomeComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(staffRoutes)
  ],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
