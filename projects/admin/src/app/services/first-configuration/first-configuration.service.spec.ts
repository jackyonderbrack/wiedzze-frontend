import { TestBed } from '@angular/core/testing';

import { FirstConfigurationService } from './first-configuration.service';

describe('FirstConfigurationService', () => {
  let service: FirstConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
