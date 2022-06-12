import { TestBed } from '@angular/core/testing';

import { CoOrdinatorGuard } from './co-ordinator.guard';

describe('CoOrdinatorGuard', () => {
  let guard: CoOrdinatorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CoOrdinatorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
