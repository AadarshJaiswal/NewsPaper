import { TestBed } from '@angular/core/testing';

import { VendorguardGuard } from './vendorguard.guard';

describe('VendorguardGuard', () => {
  let guard: VendorguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VendorguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
