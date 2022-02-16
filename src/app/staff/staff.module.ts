import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffPortalComponent } from './components/portal/staff-portal/staff-portal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StaffRoutingModule} from "./staff-routing/staff-routing.module";
import {SharedModule} from "../shared/shared.module";
import { StaffSidebarComponent } from './components/portal/staff-sidebar/staff-sidebar.component';
import { StaffHeaderComponent } from './components/portal/staff-header/staff-header.component';
import { StaffHomeComponent } from './components/home/staff-home/staff-home.component';



@NgModule({
  declarations: [
    StaffPortalComponent,
    StaffSidebarComponent,
    StaffHeaderComponent,
    StaffHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StaffRoutingModule,
    SharedModule
  ]
})
export class StaffModule { }
