import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratsPageComponent } from './congrats-page.component';

describe('CongratsPageComponent', () => {
  let component: CongratsPageComponent;
  let fixture: ComponentFixture<CongratsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongratsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
