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
    this.sections = [
      {name: 'Admissions', icon: 'fad fa-fw fa-clipboard-check', menuItems: []},
      {name: 'Assessment', icon: 'fad fa-fw fa-tasks', menuItems: []},
      {name: 'Attendance', icon: 'fad fa-fw fa-stopwatch', menuItems: []},
      {name: 'Behaviour', icon: 'fad fa-fw fa-star', menuItems: []},
      {name: 'Calendar', icon: 'fad fa-fw fa-calendar', menuItems: []},
      {name: 'Communication', icon: 'fad fa-fw fa-envelope', menuItems: []},
      {name: 'Curriculum', icon: 'fad fa-fw fa-graduation-cap', menuItems: []},
      {name: 'Documents', icon: 'fad fa-fw fa-file', menuItems: []},
      {name: 'Finance', icon: 'fad fa-fw fa-coins', menuItems: []},
      {name: 'People', icon: 'fad fa-fw fa-users', menuItems: []},
      {name: 'Personnel', icon: 'fad fa-fw fa-briefcase', menuItems: []},
      {name: 'Reports', icon: 'fad fa-fw fa-chart-bar', menuItems: []},
      {name: 'School', icon: 'fad fa-fw fa-school', menuItems: []},
      {name: 'Settings', icon: 'fad fa-fw fa-cog', menuItems: []}
    ];
  }
}
