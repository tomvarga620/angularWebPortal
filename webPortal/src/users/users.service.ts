import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { get } from 'http';
import { User } from 'src/app/entities/User';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:8080/';
  constructor(
    private http: HttpClient,
    private store: Store,
  ) { }


  get token() {
    return this.store.selectSnapshot(state => state.login.token);
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get(this.url + "getAllUsers" + this.token).pipe(
    map(jsonObj => this.fromJsonToListUsers(jsonObj)),
    catchError(error => this.httpErrorProcess(error)));
  }

  private fromJsonToListUsers(jsonObject: any): Array<User> {
    const users: Array<User> = [];
    for (const user of jsonObject) {
      if (user.groups) {
        users.push(User.clone(user));
      } else {
        users.push(new User(user.name, user.email, user.id));
      }
    }
    return users;
  }

  httpErrorProcess(error) {
    console.log(JSON.stringify(error));
    if (error instanceof HttpErrorResponse) {
      this.httpErrorProcess(error);
      return EMPTY;
    } else {
      throwError(error);
    }
  }

}