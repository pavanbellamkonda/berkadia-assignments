import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatShowsComponent } from './theat-shows.component';

describe('TheatShowsComponent', () => {
  let component: TheatShowsComponent;
  let fixture: ComponentFixture<TheatShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
