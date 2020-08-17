import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AadhaarDetailsComponent } from './aadhaar-details.component';

describe('AadhaarDetailsComponent', () => {
  let component: AadhaarDetailsComponent;
  let fixture: ComponentFixture<AadhaarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AadhaarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AadhaarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
