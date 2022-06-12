import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedReviewComponent } from './completed-review.component';

describe('CompletedReviewComponent', () => {
  let component: CompletedReviewComponent;
  let fixture: ComponentFixture<CompletedReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
