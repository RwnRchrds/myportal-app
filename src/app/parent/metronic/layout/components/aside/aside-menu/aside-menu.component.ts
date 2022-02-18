import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../../../environments/environment";
import {SidebarMenuItem} from "../../../../../../shared/models/layout/sidebar-menu-item";
import {AuthService} from "../../../../../../shared/services/app/auth.service";
import {SidebarMenuSection} from "../../../../../../shared/models/layout/sidebar-menu-section";

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent implements OnInit {

  homeRoute: string;
  sections: SidebarMenuSection[];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.homeRoute = 'home';
    this.sections = [];
  }
}
