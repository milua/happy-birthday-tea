import { Component, OnInit } from '@angular/core';
import { DialogueText } from './material/dialogue-text';
import { TimerService } from './timer/services/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  dialogue: DialogueText;
  isDialogOpen: boolean = true;
  showLogo: boolean = false;
  showKitchen: boolean = false;
  private allDialogues: DialogueText[];

  constructor(private timerService: TimerService) {
    this.timerService.timeRunOut.subscribe(() => this.playNextScene());
  }

  ngOnInit(): void {
    this.allDialogues = [
      DialogueText.INTRO
    ];
    this.dialogue = this.allDialogues[0];
  }

  onDialogEnded(): void {
    this.isDialogOpen = false;
    if(this.dialogue === DialogueText.INTRO) {
      this.showLogo = true;
      this.timerService.timeLeft = 10;
      this.timerService.startTimer();
    }
  }

  private playNextScene() {
    this.showLogo = false;
    this.showKitchen = true;
  }
}
