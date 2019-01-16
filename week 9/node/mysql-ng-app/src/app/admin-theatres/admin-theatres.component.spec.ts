import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTheatresComponent } from './admin-theatres.component';

describe('AdminTheatresComponent', () => {
  let component: AdminTheatresComponent;
  let fixture: ComponentFixture<AdminTheatresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTheatresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTheatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
