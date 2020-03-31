import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularServiceBotModule } from 'projects/angular-service-bot/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularServiceBotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
