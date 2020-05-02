import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogueModule } from './dialogue/dialogue.module';
import { SceneModule } from './scene/scene.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DialogueModule,
    SceneModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
