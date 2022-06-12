import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineefeedbackViewComponent } from './traineefeedback-view.component';

describe('TraineefeedbackViewComponent', () => {
  let component: TraineefeedbackViewComponent;
  let fixture: ComponentFixture<TraineefeedbackViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineefeedbackViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineefeedbackViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
