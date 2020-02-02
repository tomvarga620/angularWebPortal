import { Component, OnInit } from '@angular/core';
import { UserServerService } from 'src/service.user-server/user-server.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  file: File = null;
  data: FormData;

  constructor(private userServerService: UserServerService) { }

  ngOnInit() {
  }

  getFile(event) {
    this.file = <File>event.target.files[0];
    this.data = new FormData();
    this.data.append("file", this.file, this.file.name);
  }

  uploadFile() {
    this.userServerService.upLoadImage(this.data)
      .subscribe(() => console.log("REQUEST"))
  }

}
