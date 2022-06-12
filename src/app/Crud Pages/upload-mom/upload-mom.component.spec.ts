import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMOMComponent } from './upload-mom.component';

describe('UploadMOMComponent', () => {
  let component: UploadMOMComponent;
  let fixture: ComponentFixture<UploadMOMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadMOMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
