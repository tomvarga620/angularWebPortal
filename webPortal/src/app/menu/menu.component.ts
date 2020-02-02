import { Component, OnInit } from '@angular/core';
import { LoginAuth } from '../entities/loginAuth';
import { LoginAuthState } from 'src/shared/loginAuth.state';
import { Select, Store, Actions, ofActionSuccessful } from '@ngxs/store';
import { Router } from '@angular/router';
import { Logout, Login } from 'src/shared/loginAuth.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedUser = null;
  show = false;

  @Select(LoginAuthState.username) username$;

  constructor(private store: Store, private router: Router , private action$: Actions ) {
    // after logout
    this.action$.pipe(ofActionSuccessful(Logout)).subscribe( () => {
      this.show = this.store.selectSnapshot(LoginAuthState.privilage);
      this.router.navigateByUrl('login');
    });

    // after login
    this.action$.pipe(ofActionSuccessful(Login)).subscribe( () => {
        this.show = this.store.selectSnapshot(LoginAuthState.privilage);
    });
  }

  ngOnInit() {
    this.store.select(LoginAuthState.username).subscribe(u => (this.loggedUser = u));
    console.log('logged ' + this.loggedUser);
    //this.show = this.store.selectSnapshot(LoginAuthState.privilage);
    //console.log(this.show);
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
