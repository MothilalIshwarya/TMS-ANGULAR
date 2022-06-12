import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefeedbackCrudComponent } from './coursefeedback-crud.component';

describe('CoursefeedbackCrudComponent', () => {
  let component: CoursefeedbackCrudComponent;
  let fixture: ComponentFixture<CoursefeedbackCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursefeedbackCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefeedbackCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
