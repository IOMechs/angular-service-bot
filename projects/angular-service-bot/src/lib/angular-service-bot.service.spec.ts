import { TestBed } from '@angular/core/testing';

import { AngularServiceBotService } from './angular-service-bot.service';

describe('AngularServiceBotService', () => {
  let service: AngularServiceBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularServiceBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
