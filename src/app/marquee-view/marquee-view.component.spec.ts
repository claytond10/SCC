import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeViewComponent } from './marquee-view.component';

describe('MarqueeViewComponent', () => {
  let component: MarqueeViewComponent;
  let fixture: ComponentFixture<MarqueeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarqueeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
