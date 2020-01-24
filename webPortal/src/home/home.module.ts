import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ArticleComponent } from './article/article.component';
import { ArticlesHolderComponent } from './articles-holder/articles-holder.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


@NgModule({
  declarations: [ArticleComponent, ArticlesHolderComponent, HomeMainComponent, ArticleHeaderComponent, ArticleDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }