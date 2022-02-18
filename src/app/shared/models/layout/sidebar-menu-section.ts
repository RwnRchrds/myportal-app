import {SidebarMenuItem} from "./sidebar-menu-item";

export interface SidebarMenuSection {
  name: string;
  icon: string;
  menuItems: SidebarMenuItem[];
}
