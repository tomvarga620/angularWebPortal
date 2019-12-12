import { Component, OnInit } from '@angular/core';
import { LoginAuth } from '../entities/loginAuth';
import { Store } from '@ngxs/store';
import { Login } from 'src/shared/loginAuth.actions';
import { Router } from '@angular/router';
import { LoginAuthState } from 'src/shared/loginAuth.state';
import * as zxcvbn from 'zxcvbn';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

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

  formSubmit() {
    this.store.dispatch(new Login(this.loginAuth)).subscribe(() => {
      if (this.store.selectSnapshot(LoginAuthState.username)) {
          this.router.navigateByUrl('');
      }
    });
  }

  passValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const passTest = zxcvbn(control.value);
      const message = `Password strength ${passTest.score} / 4 - must be 3 or 4,
      ${passTest.feedback.warning}`;
      this.passwordMessage = message;
      return passTest.score > 3 ? { weakPassword : message} : null;
    };
  }
}
