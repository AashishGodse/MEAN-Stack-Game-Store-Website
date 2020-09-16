import { TestBed } from '@angular/core/testing';

import { DelupService } from './delup.service';

describe('DelupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DelupService = TestBed.get(DelupService);
    expect(service).toBeTruthy();
  });
});
