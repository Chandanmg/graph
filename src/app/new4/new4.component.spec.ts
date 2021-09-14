import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { New4Component } from './new4.component';

describe('New4Component', () => {
  let component: New4Component;
  let fixture: ComponentFixture<New4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
