import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material/material.module';
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
  declarations: [UsersTableComponent],
  imports: [
  CommonModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule { }
