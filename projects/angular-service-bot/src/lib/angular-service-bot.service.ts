import { Injectable } from '@angular/core';
import { ServiceBotParams } from './interface/service-bot-params';

@Injectable({
  providedIn: 'root',
})
export class AngularServiceBotService {

  constructor() { }

  public initServiceBot(serviceBotParams: ServiceBotParams) {
    const scriptFunc = `
      (function () {
        var s = document.createElement('script');
        s.src = 'https://js.servicebot.io/embeds/servicebot-billing-settings-embed.js';
        s.async = true; s.type = 'text/javascript';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      })();
    `;

    const scriptParams = `window.servicebotSettings = ${JSON.stringify(serviceBotParams)};`;
    const scriptText = scriptParams + scriptFunc;

    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.text = scriptText;
    document.body.appendChild(scriptTag);
  }
}
