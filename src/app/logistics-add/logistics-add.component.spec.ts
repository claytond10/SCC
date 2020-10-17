import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsAddComponent } from './logistics-add.component';

describe('LogisticsAddComponent', () => {
  let component: LogisticsAddComponent;
  let fixture: ComponentFixture<LogisticsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
