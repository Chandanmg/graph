import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { New2Component } from './new2.component';

describe('New2Component', () => {
  let component: New2Component;
  let fixture: ComponentFixture<New2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
