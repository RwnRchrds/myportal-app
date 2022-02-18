import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StaffRoutingModule} from "./staff-routing/staff-routing.module";
import {SharedModule} from "../shared/shared.module";
import { StaffHomeComponent } from './components/home/staff-home/staff-home.component';
import {ModalsModule, WidgetsModule} from "./metronic/partials";



@NgModule({
  declarations: [
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
