import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { ArticlesHolderComponent } from './articles-holder/articles-holder.component';


const routes: Routes = [
  {path: '',component: ArticlesHolderComponent},
  { path: 'article/:id', component: ArticleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomeRoutingModule { }
