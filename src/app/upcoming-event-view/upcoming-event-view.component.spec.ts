import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventViewComponent } from './upcoming-event-view.component';

describe('UpcomingEventViewComponent', () => {
  let component: UpcomingEventViewComponent;
  let fixture: ComponentFixture<UpcomingEventViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
