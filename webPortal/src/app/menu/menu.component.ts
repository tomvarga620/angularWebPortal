import { Component, OnInit } from '@angular/core';
import { LoginAuth } from '../entities/loginAuth';
import { LoginAuthState } from 'src/shared/loginAuth.state';
import { Select, Store, Actions, ofActionSuccessful, ofAction, ofActionDispatched, ofActionCompleted } from '@ngxs/store';
import { Router } from '@angular/router';
import { Logout, Login } from 'src/shared/loginAuth.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedUser = null;
  show = null;

  constructor(private store: Store, private router: Router , private action$: Actions ) {

    // after logout
    this.action$.pipe(ofActionSuccessful(Logout)).subscribe( () => {
      this.router.navigateByUrl('login');
    });
  }

  ngOnInit() {

    this.store.select(LoginAuthState.privilage).subscribe(p => (this.show = p));
    console.log('privilege ' + this.show);

    this.store.select(LoginAuthState.username).subscribe(u => (this.loggedUser = u));
    console.log('logged ' + this.loggedUser);
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
