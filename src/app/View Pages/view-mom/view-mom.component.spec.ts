import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMOMComponent } from './view-mom.component';

describe('ViewMOMComponent', () => {
  let component: ViewMOMComponent;
  let fixture: ComponentFixture<ViewMOMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMOMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
