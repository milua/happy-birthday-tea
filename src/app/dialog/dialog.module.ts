import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './main/dialog.component';



@NgModule({
  declarations: [DialogComponent],
  exports: [
    DialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DialogModule { }
