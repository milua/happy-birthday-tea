import { Component, Input, OnInit } from '@angular/core';
import { Sticker } from '../material/sticker';

@Component({
  selector: 'tea-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss'],
})
export class StickerComponent implements OnInit {
  @Input() stickers: Sticker[] = [];

  constructor() {}

  ngOnInit(): void {}

  getStickerUrl(sticker: Sticker): string {
    if (sticker === Sticker.TAP) {
      return '../assets/sticker/tap.png';
    } else if (sticker === Sticker.SAK) {
      return '../assets/sticker/sak.png';
    }
  }
}
