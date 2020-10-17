import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsViewComponent } from './logistics-view.component';

describe('LogisticsViewComponent', () => {
  let component: LogisticsViewComponent;
  let fixture: ComponentFixture<LogisticsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
