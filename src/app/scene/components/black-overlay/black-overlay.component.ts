import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-black-overlay',
  templateUrl: './black-overlay.component.html',
  styleUrls: ['./black-overlay.component.scss']
})
export class BlackOverlayComponent implements OnInit {
  @Input()foundStickers: number;
  @Input()foundItems: number;
  @Output()lastScene: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
