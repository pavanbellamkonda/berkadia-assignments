import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QlistService } from './qlist.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [QlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
