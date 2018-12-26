import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusiComponent } from './busi.component';

describe('BusiComponent', () => {
  let component: BusiComponent;
  let fixture: ComponentFixture<BusiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
