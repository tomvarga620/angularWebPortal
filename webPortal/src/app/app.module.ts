import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { AppNgxsModule } from './app.ngxs.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AppNgxsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
