import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptureEditComponent } from './scripture-edit.component';

describe('ScriptureEditComponent', () => {
  let component: ScriptureEditComponent;
  let fixture: ComponentFixture<ScriptureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptureEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
