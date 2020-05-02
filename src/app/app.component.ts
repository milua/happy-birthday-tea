import { Component, OnInit } from '@angular/core';
import { DialogueText } from './material/dialogue-text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  private allDialogues: DialogueText[];
  dialogue: DialogueText;

  ngOnInit(): void {
    this.allDialogues = [
      DialogueText.INTRO
    ];
    this.dialogue = this.allDialogues[0];
  }

  onDialogEnded(): void {
    // TODO play next scene
  }
}
