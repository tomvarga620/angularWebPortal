import { Component, OnInit, Input } from '@angular/core';
import { UserServerService } from 'src/service.user-server/user-server.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from 'src/app/entities/Article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  // private articleId: number;
  // article: Article;
  //@Input() article: Article;

  constructor(private serverService: UserServerService, private route: ActivatedRoute) { }

  article: Article;
  articleId: number;

  ngOnInit() {
    this.route.snapshot.paramMap.get('param');
    this.articleId = this.route.snapshot.params['id'];
    this.serverService.getArticleById(this.articleId).subscribe(article => this.article = article);

    this.article = this.serverService.loadArticle();
  }
}
