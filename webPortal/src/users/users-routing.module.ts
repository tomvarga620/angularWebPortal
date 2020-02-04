import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

const routes: Routes = [
  {path: '', component: UsersTableComponent},
  { path: 'useredit/:id', component: UsersEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class UsersRoutingModule { }
