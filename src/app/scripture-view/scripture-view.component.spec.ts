import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptureViewComponent } from './scripture-view.component';

describe('ScriptureViewComponent', () => {
  let component: ScriptureViewComponent;
  let fixture: ComponentFixture<ScriptureViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptureViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
