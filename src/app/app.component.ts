import { Component, OnInit } from '@angular/core';
import { DialogueText } from './material/dialogue-text';
import { TimerService } from './timer/services/timer.service';
import { ClickActions } from './scene/click-actions';
import { Items } from './material/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dialogue: DialogueText;
  isDialogOpen: boolean = true;
  showLogo: boolean = false;
  showKitchen: boolean = false;
  inventory: Items[] = [];

  constructor(private timerService: TimerService) {
    this.timerService.timeRunOut.subscribe(() => this.playNextScene());
  }

  ngOnInit(): void {
    this.dialogue = DialogueText.INTRO;
  }

  onDialogEnded(): void {
    this.isDialogOpen = false;
    if (this.dialogue === DialogueText.INTRO) {
      this.showLogo = true;
      this.timerService.timeLeft = 10;
      this.timerService.startTimer();
    }
  }

  openKitchenDialog($event: ClickActions): void {
    switch ($event) {
      case ClickActions.KITCHEN_CUPBOARD:
        break;
      case ClickActions.KITCHEN_WINDOW:
        break;
      case ClickActions.KITCHEN_CORN:
        this.dialogue = [DialogueText.KITCHEN_CORN[this.getRandomTextIndex(DialogueText.KITCHEN_CORN.length)]];
        this.isDialogOpen = true;
        break;
      case ClickActions.KITCHEN_POT:
        this.dialogue = [DialogueText.KITCHEN_POT[this.getRandomTextIndex(DialogueText.KITCHEN_POT.length)]];
        this.isDialogOpen = true;
        break;
      case ClickActions.KITCHEN_ELASTICS:
        if (this.inventory.includes(Items.ELASTICS)) {
          this.dialogue = [DialogueText.KITCHEN_ELASTICS[1]];
        } else {
          this.dialogue = [DialogueText.KITCHEN_ELASTICS[0]];
          this.inventory.push(Items.ELASTICS);
          // TODO Notification
        }
        this.isDialogOpen = true;
        break;
      case ClickActions.KITCHEN_COOKIES:
        this.dialogue = [DialogueText.KITCHEN_COOKIES[this.getRandomTextIndex(DialogueText.KITCHEN_COOKIES.length)]];
        this.isDialogOpen = true;
        break;
      case ClickActions.KITCHEN_DOOR:
        break;
    }
  }

  private playNextScene() {
    this.showLogo = false;
    this.showKitchen = true;
  }

  private getRandomTextIndex(textLength: number) {
    return Math.round(Math.random() * (textLength - 1));
  }
}
