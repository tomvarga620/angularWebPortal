import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArctileWrapperComponent } from './arctile-wrapper/arctile-wrapper.component';

const routes: Routes = [
  {path: '', component: ArctileWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomeRoutingModule { }
