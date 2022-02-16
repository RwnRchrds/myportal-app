import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/app/auth.service";
import {isObservable, map, Observable} from "rxjs";
import {AuthenticationService} from "./shared/services/api/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  allowLoad: boolean = false;
  title = 'myportal-app';

  constructor(private authService: AuthService, private apiAuthService: AuthenticationService) {
  }

  ngOnInit() {
    let result = this.authService.loadFromStorage();
    if (typeof result === 'boolean') {
      if (!result) {
        console.log('Not logged in.');
        this.allowLoad = true;
        return;
      }
      else {
        this.apiAuthService.getUserInfo().subscribe(() => {
          this.allowLoad = true;
        });
      }
    }
    else if (isObservable(result)) {
      result.pipe(map((refreshSuccessful: boolean) => {
        if (!refreshSuccessful) {
          this.allowLoad = true;
        }
        else {
          this.apiAuthService.getUserInfo().subscribe(() => {
            this.allowLoad = true;
          });
        }
      }));
    }
  }
}
