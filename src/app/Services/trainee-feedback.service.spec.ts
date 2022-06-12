import { TestBed } from '@angular/core/testing';

import { TraineeFeedbackService } from './trainee-feedback.service';

describe('TraineeFeedbackService', () => {
  let service: TraineeFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraineeFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
