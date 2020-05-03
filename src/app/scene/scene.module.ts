import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { NotificationComponent } from './components/notification/notification.component';
import { InventoryComponent } from './components/inventory/inventory.component';



@NgModule({
  declarations: [KitchenComponent, BackButtonComponent, NotificationComponent, InventoryComponent],
  exports: [
    KitchenComponent,
    NotificationComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SceneModule { }
