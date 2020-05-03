import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenComponent } from './kitchen/kitchen.component';



@NgModule({
  declarations: [KitchenComponent],
    exports: [
        KitchenComponent,
    ],
  imports: [
    CommonModule
  ]
})
export class SceneModule { }
