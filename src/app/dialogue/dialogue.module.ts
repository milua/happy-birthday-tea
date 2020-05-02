import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogueComponent } from './main/dialogue.component';



@NgModule({
  declarations: [DialogueComponent],
  exports: [
    DialogueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DialogueModule { }
