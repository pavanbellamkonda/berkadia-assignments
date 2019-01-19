import { TestBed } from '@angular/core/testing';

import { QlistService } from './qlist.service';

describe('QlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QlistService = TestBed.get(QlistService);
    expect(service).toBeTruthy();
  });
});
