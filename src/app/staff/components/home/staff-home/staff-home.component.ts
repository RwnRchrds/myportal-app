import { Component, OnInit } from '@angular/core';
import {PageInfoService} from "../../../metronic/layout";

@Component({
  selector: 'app-staff-home',
  templateUrl: './staff-home.component.html',
  styleUrls: ['./staff-home.component.scss']
})
export class StaffHomeComponent implements OnInit {

  constructor(private pageInfo: PageInfoService) { }

  ngOnInit(): void {
    this.pageInfo.updateTitle('Home');
  }

}
