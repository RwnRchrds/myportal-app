import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/app/auth.service";
import {catchError, isObservable, map, Observable, switchMap, throwError} from "rxjs";
import {AuthenticationService} from "./shared/services/api/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  allowLoad: boolean = false;

  constructor(private authService: AuthService, private apiAuthService: AuthenticationService) {
  }

  ngOnInit() {
    let result = this.authService.loadFromStorage();
    if (!result) {
      console.log('Not logged in.');
      this.allowLoad = true;
      return;
    }
    else {
      console.log('Logged in.');
      this.authService.updateUserInfo().pipe(map(() => {
        this.allowLoad = true;
      })).subscribe();
    }
  }
}
