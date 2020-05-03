import { Component, Input, OnInit } from '@angular/core';
import { Items } from '../../../../material/items';

@Component({
  selector: 'app-inventory-panel',
  templateUrl: './inventory-panel.component.html',
  styleUrls: ['./inventory-panel.component.scss']
})
export class InventoryPanelComponent implements OnInit {
  @Input() items: Items[] = [Items.ELASTICS];

  constructor() { }

  ngOnInit(): void {
  }

}
