import { Component, OnInit } from '@angular/core';
import { UserServerService } from 'src/service.user-server/user-server.service';
import { Article } from 'src/app/entities/Article';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  private article: Article;
  constructor(serverService: UserServerService) { }

  ngOnInit() {
    this.postArticle()
  }

  postArticle() {
    this.article = new Article("film", "Hra roku", "20.12.2020", "Adam Ivan", "Ktorá hra je najlepšia", "Hlasovanie o najlepšiu hru roka ...")
  }

}
