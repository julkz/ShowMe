import { TestBed } from '@angular/core/testing';

import { LocationsApiService } from './locations-api.service';

describe('LocationsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationsApiService = TestBed.get(LocationsApiService);
    expect(service).toBeTruthy();
  });
});
