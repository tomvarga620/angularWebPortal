import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { LoginAuth } from 'src/app/entities/loginAuth';
import { catchError, mapTo, tap, map } from 'rxjs/operators';
import { User } from '../app/entities/User';
import { Article } from 'src/app/entities/Article';

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
    return this.http.get(this.url + 'logout' + this.token)
    .pipe(mapTo(undefined),
    catchError(error => this.httpErrorProcess(error)));
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.url + 'register', user)
    .pipe(
      catchError(error => this.httpErrorProcess(error))
    );
  }

  login(auth: LoginAuth): Observable<string> {
    return this.http
      .post(this.url + 'login', auth, { responseType: 'text' })
      .pipe(
        catchError(error => this.httpErrorProcess(error))
      );
  }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url + 'getAllArticles')
      .pipe(
        catchError(error => this.httpErrorProcess(error))
      );
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get(this.url + "getAllUsers").pipe(
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


  postArticle(article: Article): void {
    this.http.post(this.url + 'postArticle', article)
      .pipe(
        catchError(error => this.httpErrorProcess(error))
      )
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(this.url + 'getArticleById/' + id);
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
