import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tea-dialog',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
})
export class DialogueComponent {
  @Input() dialog: string[];
  @Input() closeButtonText: string | undefined;
  get closeText(): string {
    return this.closeButtonText ? this.closeButtonText : 'Close';
  }
  @Output() public dialogEnded: EventEmitter<any> = new EventEmitter<any>();
  private currentTextIndex = 0;

  constructor() {}

  get isLastPage(): boolean {
    return this.currentTextIndex === this.dialog.length - 1;
  }

  get isFirstPage(): boolean {
    return this.currentTextIndex === 0;
  }

  get text(): string {
    return this.dialog[this.currentTextIndex];
  }

  get isNextEnabled(): boolean {
    return this.currentTextIndex < this.dialog.length;
  }

  get isSingleDialogueText(): boolean {
    return this.dialog.length === 1;
  }

  onNextClicked(): void {
    if (this.isLastPage) {
      this.dialogEnded.emit();
    } else {
      this.currentTextIndex += 1;
    }
  }

  onPreviousClicked(): void {
    this.currentTextIndex -= 1;
  }
}
