import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventEditComponent } from './upcoming-event-edit.component';

describe('UpcomingEventEditComponent', () => {
  let component: UpcomingEventEditComponent;
  let fixture: ComponentFixture<UpcomingEventEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
