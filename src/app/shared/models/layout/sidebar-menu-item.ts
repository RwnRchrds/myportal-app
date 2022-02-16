export interface SidebarMenuItem {
  section: string;
  icon: string;
  label: string;
  route: string;
  requiredPermissions?: number[];
}
