import { TestBed } from '@angular/core/testing';

import { TraineeGuard } from './trainee.guard';

describe('TraineeGuard', () => {
  let guard: TraineeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TraineeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
