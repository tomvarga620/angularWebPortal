import { Component, OnInit } from '@angular/core';
import { UserServerService } from 'src/service.user-server/user-server.service';
import { SnackbarService } from 'src/service.user-server/snackbar.service';
import { Login } from 'src/shared/loginAuth.actions';
import { Article } from '../entities/Article';
import { FormGroup, FormControlName, FormControl, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})

export class CreateArticleComponent implements OnInit {
 /* author = '';
  title = '';
  category = '';
  description = '';
  content = '';*/
  file: File = null;
  data: FormData;
  isFile = false;
  // article: Article = new Article();

  articleForm = new FormGroup({

    author: new FormControl('', Validators.min(4)),
    title: new FormControl('', Validators.min(4)),
    category: new FormControl('', Validators.min(4)),
    description: new FormControl('', [Validators.min(3), Validators.max(60)]),
    content: new FormControl('', [Validators.min(3), Validators.min(120)])

  });

  get author() {
    return this.articleForm.get('author');
  }

  get title() {
    return this.articleForm.get('title');
  }

  get category() {
    return this.articleForm.get('category');
  }

  get description() {
    return this.articleForm.get('description');
  }

  get content() {
    return this.articleForm.get('content');
  }

  constructor(private userServerService: UserServerService, private errorMessage: SnackbarService) { }

  ngOnInit() {
  }

  getFile(event) {
    if(event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpg' || event.target.files[0].type === 'image/jpeg') {
      this.isFile = true;
      this.file = <File>event.target.files[0];
      this.data = new FormData();
      this.data.append('file', this.file, this.file.name);
      console.log(this.file.name);

    } else {
      this.errorMessage.errorMessage('Wrong type bro!');
    }
  }

  uploadFile() {
    this.userServerService.upLoadImage(this.data)
      .subscribe(() => console.log('REQUEST'));
  }

  postArticle() {
    /*
    this.article.author = this.author.value;
    this.article.category = this.category.value;
    this.article.content = this.content;
    this.article.date = new Date().toDateString();
    this.article.description = this.description;
    this.article.title = this.title;
    this.article.imgUrl = this.file.name;
    console.log(this.article);*/

    const date = new Date().toDateString();

    const article = new Article (
      this.category.value,
      this.title.value,
      date,
      'assets/img/' + this.file.name,
      this.author.value,
      this.description.value,
      this.content.value
    );

    this.uploadFile();

    this.userServerService.postArticle(article)
      .subscribe(() => console.log("POST ARTICLE"));
  }

}
