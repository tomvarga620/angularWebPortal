import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppNgxsModule } from './app.ngxs.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material/material.module';
import { CreateArticleComponent } from './create-article/create-article.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistrationComponent,
    CreateArticleComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AppNgxsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
