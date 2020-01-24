import { Component, OnInit } from '@angular/core';
import { UserServerService } from 'src/service.user-server/user-server.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/entities/Article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  private articleId: number;
  private article: Article;

  constructor(private serverService: UserServerService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.articleId = this.routes.snapshot.params['id'];

    this.getArticle();
  }

  getArticle() {
    this.serverService.getArticleById(this.articleId).subscribe(article => this.article = article);
    console.log(this.article);

  }
  
}
