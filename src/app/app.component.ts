import { Component } from '@angular/core';
import { DialogText } from './material/dialog-text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  dialog: string[] = DialogText.INTRO;
}
