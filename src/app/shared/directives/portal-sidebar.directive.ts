import { Directive } from '@angular/core';
import {SidebarMenuItem} from "../models/layout/sidebar-menu-item";
import {AuthService} from "../services/app/auth.service";

@Directive({
  selector: '[appPortalSidebar]'
})
export class PortalSidebarDirective {

  menuItems: SidebarMenuItem[];
  homeRoute: string;
  sidebarTitle: string;

  get allowedMenuItems() {
    let user = this.authService.getUser();
    return this.menuItems.filter(i => i.requiredPermissions.some(p => user.permissions.includes(p)));
  }

  constructor(protected authService: AuthService) { }

}
