import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ArctileWrapperComponent } from './arctile-wrapper/arctile-wrapper.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [ArctileWrapperComponent, ArticleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }