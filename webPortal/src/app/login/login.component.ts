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
    name: new FormControl('', [Validators.required]),
    password: new FormControl('',Validators.required)
  });

  ngOnInit() {

  }

  get name() {
    return this.loginForm.get('name');
  }

  get password() {
    return this.loginForm.get('password');
  }

  formSubmit() {
    this.loginAuth.username = this.name.value;
    this.loginAuth.password = this.password.value;
    
    this.store.dispatch(new Login(this.loginAuth)).subscribe(() => {
      if (this.store.selectSnapshot(LoginAuthState.username)) {
          console.log('login succesfull');
          this.router.navigateByUrl('/');
      }
    });
  }
}
