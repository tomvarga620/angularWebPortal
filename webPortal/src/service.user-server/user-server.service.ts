import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { LoginAuth } from 'src/app/entities/loginAuth';
import { catchError, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServerService {
  url = 'http://localhost:8080/';
  constructor(private http: HttpClient, private store: Store) { }

  get token() {
    return this.store.selectSnapshot(state => state.login.token);
  }

  logout(): Observable<void> {
    return this.http.get(this.url + 'logout/' + this.token)
    .pipe(mapTo(undefined),
    catchError(error => this.httpErrorProcess(error)));
  }

  login(auth: LoginAuth): Observable<string> {
    return this.http
      .post(this.url + 'login', auth, { responseType: 'text' })
      .pipe(
        catchError(error => this.httpErrorProcess(error))
      );
  }

  httpErrorProcess(error) {
    console.log(JSON.stringify(error));
    if (error instanceof HttpErrorResponse) {
      this.httpErrorToMesage(error);
      return EMPTY;
    } else {
      throwError(error);
    }
  }

  httpErrorToMesage(error: HttpErrorResponse): void {
    if (error.status === 0) {
      // this.messageService.sendMesage("Server je nedostupný");
      return;
    }
    if (error.status >= 400 && error.status < 500) {
      if (error.error.errorMessage) {
       // this.messageService.sendMesage(error.error.errorMessage);
      } else {
       // this.messageService.sendMesage(JSON.parse(error.error).errorMessage);
      }
      return;
    }
   // this.messageService.sendMesage(error.message);
  }
}
