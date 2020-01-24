import { Component, OnInit } from '@angular/core';
import { UserServerService } from 'src/service.user-server/user-server.service';
import { Article } from 'src/app/entities/Article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private articles: Article[];

  constructor(private serverService: UserServerService, private router: Router) { }

  ngOnInit() {
    this.serverService.getAllArticles().subscribe(articles => this.articles = articles);
  }

  openArticle(id: number) {
    this.router.navigateByUrl('/article/' + id)
  }

}
