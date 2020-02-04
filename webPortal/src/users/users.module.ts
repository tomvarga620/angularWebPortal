import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material/material.module';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersTableComponent, UsersEditComponent],
  imports: [
  CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
