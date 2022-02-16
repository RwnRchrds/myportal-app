import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/app/auth.service";
import {LoginModel} from "../shared/models/auth/loginModel";
import {catchError, map, of, throwError} from "rxjs";
import {AppError} from "../shared/errors/appError";
import {SchoolService} from "../shared/services/api/school.service";
import {StringHelper} from "../shared/helpers/stringHelper";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  schoolName: string;

  error: string;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolService.getLocalSchoolName().pipe(map((schoolName) => {
      if (!StringHelper.isNullOrWhitespace(schoolName)) {
        this.schoolName = schoolName;
      }
    })).subscribe();
  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  get showError(): boolean {
    return !StringHelper.isNullOrWhitespace(this.error);
  }

  get currentDate(): Date {
    return new Date();
  }

  login(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      let loginModel: LoginModel = {
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value
      }
      this.authService.login(loginModel).pipe(map((result: boolean) => {
        if (result) {
          // Successful login
          this.error = '';
        }
        else {
          this.error = 'An error occurred during login.';
        }
      }), catchError((error: AppError) => {
        this.error = error.errorMessage;
        return of(false);
      })).subscribe();
    }
  }
}
