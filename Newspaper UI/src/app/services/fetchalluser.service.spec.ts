import { TestBed } from '@angular/core/testing';

import { FetchalluserService } from './fetchalluser.service';

describe('FetchalluserService', () => {
  let service: FetchalluserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchalluserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
