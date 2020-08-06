import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopHeaderComponent } from './main-top-header.component';

describe('MainTopHeaderComponent', () => {
  let component: MainTopHeaderComponent;
  let fixture: ComponentFixture<MainTopHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTopHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
