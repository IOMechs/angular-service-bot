import { Injectable } from '@angular/core';
import { ServiceBotParams } from './interface/service-bot-params';
declare var window;

@Injectable({
  providedIn: 'root',
})
export class AngularServiceBotService {

  constructor() { }

  public initServiceBot(serviceBotParams: ServiceBotParams) {
    window.servicebotSettings = serviceBotParams;
    const scriptText = `
      (function () {
        var s = document.createElement('script');
        s.src = 'https://js.servicebot.io/embeds/servicebot-billing-settings-embed.js';
        s.async = true; s.type = 'text/javascript';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      })();
    `;
    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.text = scriptText;
    document.body.appendChild(scriptTag);
  }
}
