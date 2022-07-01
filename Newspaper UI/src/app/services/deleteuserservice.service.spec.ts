import { TestBed } from '@angular/core/testing';

import { DeleteuserserviceService } from './deleteuserservice.service';

describe('DeleteuserserviceService', () => {
  let service: DeleteuserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteuserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
