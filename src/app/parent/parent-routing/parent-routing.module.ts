import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ParentHomeComponent} from "../components/home/parent-home/parent-home.component";

const parentRoutes: Routes = [
  {
    path: 'home',
    component: ParentHomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(parentRoutes)
  ],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
