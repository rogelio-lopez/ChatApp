import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChatPageComponent,
    HistoryPageComponent,
    NavBarComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
