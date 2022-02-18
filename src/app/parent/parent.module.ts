import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {ParentRoutingModule} from "./parent-routing/parent-routing.module";
import { ParentHomeComponent } from './components/home/parent-home/parent-home.component';



@NgModule({
  declarations: [
    ParentHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ParentRoutingModule,
    SharedModule
  ]
})
export class ParentModule { }
