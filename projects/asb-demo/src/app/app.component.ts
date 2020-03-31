import { Component } from '@angular/core';

@Component({
  selector: 'asb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public serviceBotParams = {
    servicebot_id: 'E0OQN0P0Dort',  // LIVE & TEST MODE IDs ARE DIFFERENT
    service: 'Flat Subscription',
    email: 'test@gmail.com',
  };

  constructor() {}

}
