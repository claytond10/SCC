import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventAddComponent } from './upcoming-event-add.component';

describe('UpcomingEventAddComponent', () => {
  let component: UpcomingEventAddComponent;
  let fixture: ComponentFixture<UpcomingEventAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
