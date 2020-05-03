import { Component, OnInit } from '@angular/core';
import { DialogueText } from './material/dialogue-text';
import { TimerService } from './timer/services/timer.service';
import { ClickActions } from './scene/click-actions';
import { Items } from './material/items';
import { NotificationService } from './scene/components/notification/services/notification.service';
import { Clues } from './material/clues';
import { Sticker } from './material/sticker';
import { Scene } from './material/scene';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dialogue: DialogueText[];
  isDialogOpen: boolean = true;
  showLogo: boolean = false;
  showKitchen: boolean = false;
  showInventory: boolean = false;
  showNeighbor: boolean = false;

  inventory: Items[] = [];
  foundClues: Clues[] = [];
  foundStickers: Sticker[] = [];
  lastScene: string | undefined = undefined;

  constructor(private timerService: TimerService, private notificationService: NotificationService) {
    this.timerService.timeRunOut.subscribe(() => this.playNextScene(Scene.KITCHEN));
  }

  ngOnInit(): void {
    this.dialogue = DialogueText.INTRO;
  }

  onDialogEnded(): void {
    this.isDialogOpen = false;
    console.log(this.dialogue);
    if (this.dialogue === DialogueText.INTRO) {
      this.showLogo = true;
      this.timerService.timeLeft = 10;
      this.timerService.startTimer();
    } else if(this.dialogue.includes('Ok, let\'s catch the cup crasher!')) {
      console.log('play');

      this.playNextScene(Scene.NEIGHBOR);
    }
  }

  openKitchenDialog($event: ClickActions): void {
    switch ($event) {
      case ClickActions.KITCHEN_EMPTY_SPOT:
        if (!this.foundClues.includes(Clues.MISSING_CUP)) {
          this.foundClues.push(Clues.MISSING_CUP);
          this.dialogue = [DialogueText.CUPBOARD_EMPT_SPOT[0]];
        } else {
          this.dialogue = [DialogueText.CUPBOARD_EMPT_SPOT[1]];
        }
        this.isDialogOpen = true;
        break;
      case ClickActions.KITCHEN_CUPS:
        this.dialogue = [DialogueText.CUPBOARD_CUPS[this.getRandomTextIndex(DialogueText.CUPBOARD_CUPS.length)]];
        this.isDialogOpen = true;
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
          this.notificationService.showNotification('You picked up some elastics.')
          this.inventory.push(Items.ELASTICS);
        }
        this.isDialogOpen = true;
        break;
      case ClickActions.KITCHEN_COOKIES:
        this.dialogue = [DialogueText.KITCHEN_COOKIES[this.getRandomTextIndex(DialogueText.KITCHEN_COOKIES.length)]];
        this.isDialogOpen = true;
        break;
      case ClickActions.KITCHEN_RIGHT_WINDOW:
        this.dialogue = [DialogueText.KITCHEN_RIGHT_WINDOW[this.getRandomTextIndex(DialogueText.KITCHEN_RIGHT_WINDOW.length)]];
        this.isDialogOpen = true;
        break;
      case ClickActions.KITCHEN_LEFT_WINDOW:
        if (this.foundClues.includes(Clues.BROKEN_WINDOW)) {
          this.dialogue = [DialogueText.KITCHEN_LEFT_WINDOW[1]];
        } else {
          this.dialogue = [DialogueText.KITCHEN_LEFT_WINDOW[0]];
          this.foundClues.push(Clues.BROKEN_WINDOW)
        }
        this.isDialogOpen = true;
        break;
      case ClickActions.KITCHEN_DOOR:
        if (this.foundClues.length < 2) {
          this.dialogue = [DialogueText.KITCHEN_DOOR[0]];
        } else {
          this.dialogue = [DialogueText.KITCHEN_DOOR[1]];
          this.lastScene = 'Next';
        }
        this.isDialogOpen = true;
        break;
    }
  }

  onAddSticker(sticker: Sticker) {
    if (!this.foundStickers.includes(sticker)) {
      this.foundStickers.push(sticker);
      this.notificationService.showNotification('You found TAP!')
      this.dialogue = [DialogueText.STICKER_TAP[0]];
      this.isDialogOpen = true;
    } else {
      this.dialogue = [DialogueText.STICKER_TAP[1]];
      this.isDialogOpen = true;
    }
  }

  private playNextScene(scene: Scene): void {
    if (scene === Scene.KITCHEN) {
      this.showLogo = false;
      this.showKitchen = true;
    } else if (scene === Scene.NEIGHBOR) {
      this.showKitchen = false;
      this.showNeighbor = true;
    }
  }

  private getRandomTextIndex(textLength: number): number {
    return Math.round(Math.random() * (textLength - 1));
  }
}
