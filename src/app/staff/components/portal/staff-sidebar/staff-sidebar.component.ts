import { Component, OnInit } from '@angular/core';
import {PortalSidebarDirective} from "../../../../shared/directives/portal-sidebar.directive";
import {AuthService} from "../../../../shared/services/app/auth.service";

@Component({
  selector: 'app-staff-sidebar',
  templateUrl: './staff-sidebar.component.html',
  styleUrls: ['./staff-sidebar.component.scss']
})
export class StaffSidebarComponent extends PortalSidebarDirective implements OnInit {


  constructor(authService: AuthService) {
    super(authService);
  }

  ngOnInit(): void {
    this.sidebarTitle = 'Staff';
    this.homeRoute = 'staff/home';
    this.menuItems = [];
  }

}
