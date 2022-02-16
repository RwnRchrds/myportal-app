import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalSidebarDirective } from './directives/portal-sidebar.directive';



@NgModule({
  declarations: [
    PortalSidebarDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class SharedModule { }
