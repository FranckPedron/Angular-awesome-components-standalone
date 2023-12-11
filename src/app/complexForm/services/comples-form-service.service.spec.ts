import { TestBed } from '@angular/core/testing';

import { ComplexFormServiceService } from './complex-form-service.service';

describe('ComplesFormServiceService', () => {
  let service: ComplexFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplexFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
