import { Component, OnInit } from '@angular/core';
import { UserServerService } from 'src/service.user-server/user-server.service';
import { SnackbarService } from 'src/service.user-server/snackbar.service';
import { Login } from 'src/shared/loginAuth.actions';
import { Article } from '../entities/Article';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  author = '';
  title = '';
  category = '';
  description = '';
  content = '';
  file: File = null;
  data: FormData;
  isFile = false;
  article:Article = new Article();

  constructor(private userServerService: UserServerService, private errorMessage: SnackbarService) { }

  ngOnInit() {
  }

  getFile(event) {
    if(event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpg') {
      this.isFile = true;
      this.file = <File>event.target.files[0];
      this.data = new FormData();
      this.data.append("file", this.file, this.file.name);
      console.log(this.file.name);
      
    } else {
      this.errorMessage.errorMessage("Wrong type bro!")
    }
  }

  uploadFile() {
    this.userServerService.upLoadImage(this.data)
      .subscribe(() => console.log("REQUEST"))
  }

  postArticle() {
    this.article.author = this.author;
    this.article.category = this.category;
    this.article.content = this.content;
    this.article.date = new Date().toDateString();
    this.article.description = this.description;
    this.article.title = this.title;
    this.article.imgUrl = this.file.name;
    console.log(this.article);
    this.uploadFile();

    this.userServerService.postArticle(this.article)
      .subscribe(() => console.log("POST ARTICLE"));
  }

}
