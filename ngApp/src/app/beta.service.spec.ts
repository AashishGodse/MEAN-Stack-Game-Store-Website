import { TestBed } from '@angular/core/testing';

import { BetaService } from './beta.service';

describe('BetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BetaService = TestBed.get(BetaService);
    expect(service).toBeTruthy();
  });
});
