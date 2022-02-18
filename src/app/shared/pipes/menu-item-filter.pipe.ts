import { Pipe, PipeTransform } from '@angular/core';
import {SidebarMenuItem} from "../models/layout/sidebar-menu-item";
import {map, of, take} from "rxjs";
import {AuthService} from "../services/app/auth.service";
import {SidebarMenuSection} from "../models/layout/sidebar-menu-section";

@Pipe({
  name: 'menuItemPermissionFilter'
})
export class MenuItemPermissionFilterPipe implements PipeTransform {

  constructor(private authService: AuthService){}

  transform(menuItemSection: SidebarMenuSection): SidebarMenuItem[] {
    if (!menuItemSection) {
      return [];
    }
    let user = this.authService.getUser();
    let items = menuItemSection.menuItems.filter(item =>
      (item.requiredPermissions == null || item.requiredPermissions?.some(s => user.permissions.includes(s))));
    return items;
  }

}
