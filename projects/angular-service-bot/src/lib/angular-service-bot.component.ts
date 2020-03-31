import { AfterViewInit, Component, Input } from '@angular/core';
import { AngularServiceBotService } from './angular-service-bot.service';
import { ServiceBotParams } from './interface/service-bot-params';

@Component({
  selector: 'lib-angular-service-bot',
  template: `
    <div>
      <div id="servicebot-subscription-portal"></div>
    </div>
  `,
})
export class AngularServiceBotComponent implements AfterViewInit {

  @Input() public serviceBotParams: ServiceBotParams;

  constructor(
    private bot: AngularServiceBotService,
  ) { }

  public ngAfterViewInit() {
    this.bot.initServiceBot(this.serviceBotParams);
  }

}
