import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClickActions } from '../click-actions';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {
  @Output() openDialog: EventEmitter<ClickActions> = new EventEmitter<ClickActions>();
  showWindowActions: boolean = false;
  showCupboardActions: boolean = false;
  showKitchenActions: boolean = true;
  ClickAction = ClickActions;
  private urls: string[] = [
    '../../assets/01-kitchen.jpg',
    '../../assets/01-kitchen-cupboard.jpg',
    '../../assets/01-kitchen-window.jpg',
    '../../assets/01-kitchen-window-broken.jpg',
  ];
  imageUrl: string = this.urls[0];

  constructor() {
    this.imageUrl = this.urls[0];
  }

  ngOnInit(): void {
  }

  showWindow(): void {
    this.imageUrl = this.urls[2];
    this.showKitchenActions = false;
    this.showWindowActions = true;
  }

  showCupboard(): void {
    this.imageUrl = this.urls[1];
    this.showKitchenActions = false;
    this.showCupboardActions = true;
  }

  showKitchen(): void {
    this.imageUrl = this.urls[0];
    this.showWindowActions = false;
    this.showCupboardActions = false;
    this.showKitchenActions = true;
  }
}
