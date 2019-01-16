import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShowsComponent } from './movie-shows.component';

describe('MovieShowsComponent', () => {
  let component: MovieShowsComponent;
  let fixture: ComponentFixture<MovieShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
