import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScripturesViewComponent } from './scriptures-view.component';

describe('ScripturesViewComponent', () => {
  let component: ScripturesViewComponent;
  let fixture: ComponentFixture<ScripturesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScripturesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScripturesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
