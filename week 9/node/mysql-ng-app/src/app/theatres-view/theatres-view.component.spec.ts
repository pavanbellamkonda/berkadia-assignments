import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatresViewComponent } from './theatres-view.component';

describe('TheatresViewComponent', () => {
  let component: TheatresViewComponent;
  let fixture: ComponentFixture<TheatresViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatresViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatresViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
