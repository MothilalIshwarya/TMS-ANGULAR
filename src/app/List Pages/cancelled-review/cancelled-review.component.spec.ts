import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledReviewComponent } from './cancelled-review.component';

describe('CancelledReviewComponent', () => {
  let component: CancelledReviewComponent;
  let fixture: ComponentFixture<CancelledReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelledReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
