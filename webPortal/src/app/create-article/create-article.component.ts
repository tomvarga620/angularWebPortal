import { Component, OnInit } from '@angular/core';
import { UserServerService } from 'src/service.user-server/user-server.service';
import { SnackbarService } from 'src/service.user-server/snackbar.service';
import { Login } from 'src/shared/loginAuth.actions';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  author = '';
  form: FormData = new FormData();
  file: File = null;
  data: FormData;
  isFile = false;


  constructor(private userServerService: UserServerService, private errorMessage: SnackbarService) { }

  ngOnInit() {
  }

  getFile(event) {
    if(event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpg') {
      this.isFile = true;
      this.file = <File>event.target.files[0];
      this.data = new FormData();
      this.data.append("file", this.file, this.file.name);
    } else {
      this.errorMessage.errorMessage("Wrong type bro!")
    }
  }

  uploadFile() {
    this.userServerService.upLoadImage(this.data)
      .subscribe(() => console.log("REQUEST"))
  }

  postArticle() {
    console.log("POST ARTICLE");
    console.log(this.form.getAll );
  }

}
