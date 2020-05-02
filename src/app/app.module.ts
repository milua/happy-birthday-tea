import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogueModule } from './dialogue/dialogue.module';
import { SceneModule } from './scene/scene.module';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent
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
