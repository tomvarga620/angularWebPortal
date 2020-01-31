import { Component, OnInit } from '@angular/core';
import { UserServerService } from 'src/service.user-server/user-server.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  file: File = null;

  constructor(private userServerService: UserServerService) { }

  ngOnInit() {
  } 

  uploadFile(event) {
    this.file = <File>event.target.files[0];
    const data = new FormData();
    data.append("file", this.file, this.file.name);

    this.userServerService.upLoadImage(this.file).subscribe(() => console.log("REQUEST"));
    
  }

}
