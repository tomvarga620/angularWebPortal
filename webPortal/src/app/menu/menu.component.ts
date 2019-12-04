import { Component, OnInit } from '@angular/core';
import { LoginAuth } from '../entities/loginAuth';
import { LoginAuthState } from 'src/shared/loginAuth.state';
import { Select, Store, Actions, ofActionSuccessful } from '@ngxs/store';
import { Router } from '@angular/router';
import { Logout } from 'src/shared/loginAuth.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedUser = null;

  @Select(LoginAuthState.username) username$;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.subscribe(u => this.loggedUser = u);
  }

  logout() {
    this.store.dispatch(new Logout()).subscribe( () => this.router.navigateByUrl('/login'));
  }

}
