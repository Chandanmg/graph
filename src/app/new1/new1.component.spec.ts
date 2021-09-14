import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { New1Component } from './new1.component';

describe('New1Component', () => {
  let component: New1Component;
  let fixture: ComponentFixture<New1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New1Component,]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
