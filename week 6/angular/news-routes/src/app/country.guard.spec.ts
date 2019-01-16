import { TestBed, async, inject } from '@angular/core/testing';

import { CountryGuard } from './country.guard';

describe('CountryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryGuard]
    });
  });

  it('should ...', inject([CountryGuard], (guard: CountryGuard) => {
    expect(guard).toBeTruthy();
  }));
});
