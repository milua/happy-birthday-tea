import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClickActions } from '../click-actions';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {
  @Output() openDialog: EventEmitter<ClickActions>= new EventEmitter<ClickActions>();

  private urls: string[] = [
    '../../assets/01-kitchen.jpg',
    '../../assets/01-kitchen-cupboard.jpg',
    '../../assets/01-kitchen-window.jpg',
    '../../assets/01-kitchen-window-broken.jpg',
  ];
  imageUrl: string = '../../assets/01-kitchen.jpg';
  ClickAction = ClickActions;

  constructor() {
    this.imageUrl = this.urls[0];
  }

  ngOnInit(): void {
  }

  onCornClicked(): void {

  }
}
