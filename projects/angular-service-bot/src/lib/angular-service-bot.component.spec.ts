import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularServiceBotComponent } from './angular-service-bot.component';

describe('AngularServiceBotComponent', () => {
  let component: AngularServiceBotComponent;
  let fixture: ComponentFixture<AngularServiceBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularServiceBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularServiceBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
