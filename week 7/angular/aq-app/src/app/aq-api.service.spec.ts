import { TestBed } from '@angular/core/testing';

import { AqApiService } from './aq-api.service';

describe('AqApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AqApiService = TestBed.get(AqApiService);
    expect(service).toBeTruthy();
  });
});
