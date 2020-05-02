import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() dialog: string[];
  private currentTextIndex: number = 0;

  constructor() {
  }

  get isLastPage(): boolean {
    return this.currentTextIndex === this.dialog.length - 1;
  }

  get isFirstPage(): boolean {
    return this.currentTextIndex === 0;
  }

  get text(): string {
    return this.dialog[this.currentTextIndex];
  }

  onNextClicked(): void {
    this.currentTextIndex += 1;
  }

  onPreviousClicked(): void {
    this.currentTextIndex -= 1;
  }
}
