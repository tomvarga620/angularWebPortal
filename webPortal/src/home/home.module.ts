import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ArctileWrapperComponent } from './arctile-wrapper/arctile-wrapper.component';


@NgModule({
  declarations: [ArctileWrapperComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }