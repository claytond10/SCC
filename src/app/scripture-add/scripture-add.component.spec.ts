import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptureAddComponent } from './scripture-add.component';

describe('ScriptureAddComponent', () => {
  let component: ScriptureAddComponent;
  let fixture: ComponentFixture<ScriptureAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptureAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
