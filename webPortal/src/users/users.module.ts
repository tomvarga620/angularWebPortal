import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material/material.module';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

@NgModule({
  declarations: [UsersTableComponent, UsersEditComponent],
  imports: [
  CommonModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule { }
