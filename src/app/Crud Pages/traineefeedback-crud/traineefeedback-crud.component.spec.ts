import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineefeedbackCrudComponent } from './traineefeedback-crud.component';

describe('TraineefeedbackCrudComponent', () => {
  let component: TraineefeedbackCrudComponent;
  let fixture: ComponentFixture<TraineefeedbackCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineefeedbackCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineefeedbackCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
