import { NgModule } from '@angular/core';
import { AngularServiceBotComponent } from './angular-service-bot.component';
import { AngularServiceBotService } from './angular-service-bot.service';



@NgModule({
  declarations: [AngularServiceBotComponent],
  imports: [
  ],
  exports: [AngularServiceBotComponent],
  providers: [AngularServiceBotService]
})
export class AngularServiceBotModule { }
