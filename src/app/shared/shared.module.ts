import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalSidebarDirective } from './directives/portal-sidebar.directive';
import { MenuItemPermissionFilterPipe } from './pipes/menu-item-filter.pipe';



@NgModule({
  declarations: [
    PortalSidebarDirective,
    MenuItemPermissionFilterPipe
  ],
  imports: [
    CommonModule
  ],
    exports: [
        MenuItemPermissionFilterPipe
    ]
})
export class SharedModule { }
