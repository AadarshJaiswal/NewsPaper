import { TestBed } from '@angular/core/testing';

import { LoginuserserviceService } from './loginuserservice.service';

describe('LoginuserserviceService', () => {
  let service: LoginuserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginuserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
