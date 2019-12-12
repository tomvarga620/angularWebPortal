import { Component, OnInit } from '@angular/core';
import { LoginAuth } from '../entities/loginAuth';
import { Store } from '@ngxs/store';
import { Login } from 'src/shared/loginAuth.actions';
import { Router } from '@angular/router';
import { LoginAuthState } from 'src/shared/loginAuth.state';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import * as zxcvbn from 'zxcvbn';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginAuth = new LoginAuth();
  passwordMessage = '';

  constructor(private store: Store, private router: Router) { }

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', this.passValidator())
  });

  ngOnInit() {

  }

  get name() {
    return this.loginForm.get('name');
  }

  get password() {
    return this.loginForm.get('password');
  }

  formSubmit() {}

  passValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const passTest = zxcvbn(control.value);
      const message = `Password strength / 4 - must be 3 or 4,
      ${passTest.feedback.warning}`;
      this.passwordMessage = message;
      return passTest.score > 3 ? { weakPassword : message} : null;
    };
  }
}
