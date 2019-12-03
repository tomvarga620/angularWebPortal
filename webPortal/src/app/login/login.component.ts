import { Component, OnInit } from '@angular/core';
import { LoginAuth } from '../entities/loginAuth';
import { Store } from '@ngxs/store';
import { Login } from 'src/shared/loginAuth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginAuth = new LoginAuth();

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new Login(this.loginAuth));
  }

  formSubmit(){}

}
