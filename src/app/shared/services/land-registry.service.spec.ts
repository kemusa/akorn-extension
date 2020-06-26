import { TestBed } from '@angular/core/testing';

import { LandRegistryService } from './land-registry.service';

describe('LandRegistryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandRegistryService = TestBed.get(LandRegistryService);
    expect(service).toBeTruthy();
  });
});
