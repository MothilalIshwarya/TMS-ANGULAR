import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefeedbackViewComponent } from './coursefeedback-view.component';

describe('CoursefeedbackViewComponent', () => {
  let component: CoursefeedbackViewComponent;
  let fixture: ComponentFixture<CoursefeedbackViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursefeedbackViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefeedbackViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
