import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DeactivateGuard } from './guard/deactivate-guard.guard';
import { AuthGuard } from './guard/auth.guard';
import { CreateArticleComponent } from './create-article/create-article.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent, canDeactivate: [DeactivateGuard]},
  { path: '' , loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule)},
  { path: 'createArticle', component: CreateArticleComponent },
  { path: 'users' , canActivate: [AuthGuard] , loadChildren: () => import('../users/users.module').then(mod => mod.UsersModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
