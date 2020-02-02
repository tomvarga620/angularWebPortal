import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  exports: [
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule
  ]
})
export class MaterialModule { }
