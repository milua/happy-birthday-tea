import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BagpackButtonComponent } from './components/inventory/bagpack-button/bagpack-button.component';
import { InventoryPanelComponent } from './components/inventory/inventory-panel/inventory-panel.component';



@NgModule({
  declarations: [KitchenComponent, BackButtonComponent, NotificationComponent, BagpackButtonComponent, InventoryPanelComponent],
  exports: [
    KitchenComponent,
    NotificationComponent,
    BagpackButtonComponent,
    InventoryPanelComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SceneModule { }
