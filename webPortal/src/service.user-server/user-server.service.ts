import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class UserServerService {
  url = 'http://localhost:8080/';
  constructor(private http: HttpClient, private store: Store) { }

  get token() {
    return this.store.selectSnapshot(state => state.login.token);
  }

}
