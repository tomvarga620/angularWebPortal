import { Component, OnInit, Input } from '@angular/core';
import { UserServerService } from 'src/service.user-server/user-server.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/entities/Article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  // private articleId: number;
  // article: Article;
  @Input() article: string;

  constructor(private serverService: UserServerService, private routes: ActivatedRoute) { }

  ngOnInit() {
    //console.log(article);
    //this.articleId = this.routes.snapshot.params['id'];
    //this.serverService.getArticleById(this.articleId).subscribe(article => this.article = article);
  }
}
