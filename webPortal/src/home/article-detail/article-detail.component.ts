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

  ngOnInit() {
    // this.route.snapshot.paramMap.get('param');
    // console.log(this.route.snapshot.paramMap.get('param'));
    // console.log(article);
    //this.articleId = this.routes.snapshot.params['id'];
    //this.serverService.getArticleById(this.articleId).subscribe(article => this.article = article);

    console.log(this.serverService.loadArticle());
    this.article = this.serverService.loadArticle();

  }
}
