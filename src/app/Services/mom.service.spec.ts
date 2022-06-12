import { TestBed } from '@angular/core/testing';

import { MOMService } from './mom.service';

describe('MOMService', () => {
  let service: MOMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MOMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
