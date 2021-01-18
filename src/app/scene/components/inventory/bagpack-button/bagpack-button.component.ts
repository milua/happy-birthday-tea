import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tea-bagpack',
  templateUrl: './bagpack-button.component.html',
  styleUrls: ['./bagpack-button.component.scss'],
})
export class BagpackButtonComponent implements OnInit {
  isButtonChecked = false;
  @Output() bagpackChecked: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  toggleCheckButton(): void {
    this.isButtonChecked = !this.isButtonChecked;
    this.bagpackChecked.emit(this.isButtonChecked);
  }
}
