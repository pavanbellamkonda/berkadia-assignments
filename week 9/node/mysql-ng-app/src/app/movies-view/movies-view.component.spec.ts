import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesViewComponent } from './movies-view.component';

describe('MoviesViewComponent', () => {
  let component: MoviesViewComponent;
  let fixture: ComponentFixture<MoviesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
