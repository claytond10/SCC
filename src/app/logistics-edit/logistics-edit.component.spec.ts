import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsEditComponent } from './logistics-edit.component';

describe('LogisticsEditComponent', () => {
  let component: LogisticsEditComponent;
  let fixture: ComponentFixture<LogisticsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
