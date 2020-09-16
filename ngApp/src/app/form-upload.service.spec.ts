import { TestBed } from '@angular/core/testing';

import { FormUploadService } from './form-upload.service';

describe('FormUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormUploadService = TestBed.get(FormUploadService);
    expect(service).toBeTruthy();
  });
});
