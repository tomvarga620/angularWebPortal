import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,
    //MatIconModule,
  ],
  exports: [
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,
    //MatIconModule
  ]
})
export class MaterialModule { }
