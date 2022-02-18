import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StudentHomeComponent} from "../components/home/student-home/student-home.component";

const studentRoutes: Routes = [
  {
    path: 'home',
    component: StudentHomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(studentRoutes)
  ],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
