import { Component, OnInit } from '@angular/core';
import { LoginAuth } from '../entities/loginAuth';
import { Store } from '@ngxs/store';
import { Login } from 'src/shared/loginAuth.actions';
import { Router } from '@angular/router';
import { LoginAuthState } from 'src/shared/loginAuth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginAuth = new LoginAuth();

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {

  }

  formSubmit() {
    this.store.dispatch(new Login(this.loginAuth)).subscribe(() => {
      if (this.store.selectSnapshot(LoginAuthState.username)) {
          this.router.navigateByUrl('');
      }
    });
  }
}
