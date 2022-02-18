import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHomeComponent } from './components/home/student-home/student-home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {StudentRoutingModule} from "./student-routing/student-routing.module";



@NgModule({
  declarations: [
    StudentHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
