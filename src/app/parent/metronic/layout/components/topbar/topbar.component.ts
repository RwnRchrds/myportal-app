import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../core/layout.service';
import {AuthService} from "../../../../../shared/services/app/auth.service";
import {LoggedInUserModel} from "../../../../../shared/models/auth/loggedInUserModel";
import {StringHelper} from "../../../../../shared/helpers/stringHelper";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  toolbarButtonMarginClass = 'ms-1 ms-lg-3';
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px';
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px';
  toolbarButtonIconSizeClass = 'svg-icon-1';
  headerLeft: string = 'menu';
  user: LoggedInUserModel;

  constructor(private layout: LayoutService, private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.headerLeft = this.layout.getProp('header.left') as string;
  }

  get showProfileImage() {
    return !StringHelper.isNullOrWhitespace(this.user.profileImage);
  }
}
