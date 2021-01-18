import { Component, Input, OnInit } from '@angular/core';
import { Items } from '../../../../material/items';

@Component({
  selector: 'tea-inventory-panel',
  templateUrl: './inventory-panel.component.html',
  styleUrls: ['./inventory-panel.component.scss'],
})
export class InventoryPanelComponent implements OnInit {
  @Input() items: Items[] = [];

  constructor() {}

  ngOnInit(): void {}

  getItemName(item: Items): string {
    if (item === Items.ELASTICS) {
      return 'Elastics';
    }
    if (item === Items.SNOWBALL) {
      return 'Snowball';
    }
  }

  getItemTitle(item: Items) {
    if (item === Items.ELASTICS) {
      return 'Always good to have some elastics with you!';
    }
    if (item === Items.SNOWBALL) {
      return 'A never melting snowball.';
    }
  }
}
