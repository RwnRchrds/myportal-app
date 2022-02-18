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
      {name: 'Admissions', icon: 'fad fa-fw fa-clipboard-check', menuItems: [{label: 'Applications', route: 'admissions/applications'}]},
      {name: 'Assessment', icon: 'fad fa-fw fa-tasks', menuItems: [{label: 'Applications', route: 'assessment'}]},
      {name: 'Attendance', icon: 'fad fa-fw fa-stopwatch', menuItems: [{label: 'Applications', route: 'assessment'}]},
      {name: 'Behaviour', icon: 'fad fa-fw fa-star', menuItems: [{label: 'Applications', route: 'assessment'}]},
      {name: 'Calendar', icon: 'fad fa-fw fa-calendar', menuItems: [{label: 'Applications', route: 'assessment'}]},
      {name: 'Communication', icon: 'fad fa-fw fa-envelope', menuItems: [{label: 'Applications', route: 'assessment'}]},
      {name: 'Curriculum', icon: 'fad fa-fw fa-graduation-cap', menuItems: [{label: 'Applications', route: 'assessment'}]},
      {name: 'Documents', icon: 'fad fa-fw fa-file', menuItems: [{label: 'Applications', route: 'assessment'}]},
      {name: 'Finance', icon: 'fad fa-fw fa-coins', menuItems: [{label: 'Applications', route: 'assessment'}]},
      {name: 'People', icon: 'fad fa-fw fa-users', menuItems: [{label: 'Applications', route: 'assessment'}]},
      {name: 'Personnel', icon: 'fad fa-fw fa-briefcase', menuItems: [{label: 'Applications', route: 'assessment'}]},
      {name: 'Reports', icon: 'fad fa-fw fa-chart-bar', menuItems: [{label: 'Applications', route: 'assessment'}]},
      {name: 'School', icon: 'fad fa-fw fa-school', menuItems: [{label: 'Applications', route: 'assessment'}]},
      {name: 'Settings', icon: 'fad fa-fw fa-cog', menuItems: [{label: 'Applications', route: 'assessment'}]}
    ]
  }
}
