import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SceneComponent } from './main/scene.component';



@NgModule({
  declarations: [SceneComponent],
  exports: [
    SceneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SceneModule { }
