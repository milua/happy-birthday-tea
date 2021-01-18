import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClickActions } from '../click-actions';
import { Sticker } from '../../material/sticker';

@Component({
  selector: 'tea-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss'],
})
export class KitchenComponent implements OnInit {
  @Output()
  openDialog: EventEmitter<ClickActions> = new EventEmitter<ClickActions>();
  @Output() closeDialog: EventEmitter<any> = new EventEmitter<any>();
  @Output() addSticker: EventEmitter<Sticker> = new EventEmitter<Sticker>();

  showWindowActions = false;
  foundMissingCup = false;
  showCupboardActions = false;
  showKitchenActions = true;
  ClickAction = ClickActions;
  private urls: string[] = [
    '../../assets/01-kitchen.jpg',
    '../../assets/01-kitchen-cupboard.jpg',
    '../../assets/01-kitchen-cupboard-missing-cup.jpg',
    '../../assets/01-kitchen-window.jpg',
    '../../assets/01-kitchen-window-broken.jpg',
  ];
  imageUrl: string = this.urls[0];
  Sticker = Sticker;

  constructor() {
    this.imageUrl = this.urls[0];
  }

  ngOnInit(): void {}

  showWindow(): void {
    this.closeDialog.emit();
    this.imageUrl = this.urls[3];
    this.showKitchenActions = false;
    this.showWindowActions = true;
  }

  showCupboard(): void {
    this.closeDialog.emit();
    if (!this.foundMissingCup) {
      this.imageUrl = this.urls[1];
    } else {
      this.imageUrl = this.urls[2];
    }
    this.showKitchenActions = false;
    this.showCupboardActions = true;
  }

  showKitchen(): void {
    this.closeDialog.emit();
    this.imageUrl = this.urls[0];
    this.showWindowActions = false;
    this.showCupboardActions = false;
    this.showKitchenActions = true;
  }

  onEmptySpotClicked(): void {
    this.foundMissingCup = true;
    this.imageUrl = this.urls[2];
    this.openDialog.emit(this.ClickAction.KITCHEN_EMPTY_SPOT);
  }

  onLeftWindowClicked(): void {
    this.imageUrl = this.urls[4];
    this.openDialog.emit(this.ClickAction.KITCHEN_LEFT_WINDOW);
  }
}
