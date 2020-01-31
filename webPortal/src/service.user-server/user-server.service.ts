import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { LoginAuth } from 'src/app/entities/loginAuth';
import { catchError, mapTo, tap, map } from 'rxjs/operators';
import { User } from '../app/entities/User';
import { Article } from 'src/app/entities/Article';
import { error } from 'util';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UserServerService {
  private articleToDetail: Article;
  url = 'http://localhost:8080/';
  constructor(private http: HttpClient, private store: Store, private snackBarService: SnackbarService) { }

  get token() {
    return this.store.selectSnapshot(state => state.login.token);
  }

  set article(article: Article) {
    article = this.articleToDetail;
  }

  get article() {
    return this.articleToDetail;
  }

  saveArticle(article: Article) {
    this.articleToDetail = article;
  }

  loadArticle() {
    return this.articleToDetail;
  }

  logout(): Observable<void> {
    return this.http.get(this.url + 'logout/' + this.token)
    .pipe(mapTo(undefined),
    catchError(error => this.httpErrorProcess(error)));
  }

  register(user: User): Observable<User> { 
    return this.http.post<User>(this.url + 'register', user)
    .pipe(
      catchError(error => this.httpErrorProcess(error))
    );
  }

  login(auth: LoginAuth): Observable<LoginAuth> {
    return this.http
      .post<LoginAuth>(this.url + 'login', auth)
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
    return this.http.get<User[]>(this.url + "getAllUsers/" + this.token)
      .pipe(
        //map(jsonObj => this.fromJsonToListUsers(jsonObj)),
        catchError(error => this.httpErrorProcess(error)));
  }

  upLoadImage(data: File): Observable<void> {
    return this.http.post<void>(this.url + 'uploadImage', data)
      .pipe(
        catchError(error => this.httpErrorProcess(error))
      );
  }
/*
  private fromJsonToListUsers(jsonObject: any): Array<User> {
    const users: Array<User> = [];
    for (const user of jsonObject) {
      if (user.groups) {
        users.push(User.clone(user));
      } else {
        users.push(new User(user.name, user.email, user.id, user.privilage));
      }
    }
    return users;
  }
*/
  postArticle(article: Article): void {
    this.http.post(this.url + 'postArticle/' + this.token, article)
      .pipe(
        catchError(error => this.httpErrorProcess(error))
      );
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(this.url + 'getArticleById/' + id)
    .pipe(catchError(error => this.httpErrorProcess(error)));
  }

  editUser(user: User): void {
    this.http.put(this.url + 'editUser/' + this.token, user)
      .pipe(
        catchError(error => this.httpErrorProcess(error))
      )
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
      this.snackBarService.errorMessage('Server je nedostupný');
      return;
    }
    if (error.status >= 400 && error.status < 500) {
      if (error.error.errorMessage) {
       this.snackBarService.errorMessage(error.error.errorMessage);
      } else {
       this.snackBarService.errorMessage(error.error.errorMessage);
      }
      return;
    }
    this.snackBarService.errorMessage(error.message);
  }
}
