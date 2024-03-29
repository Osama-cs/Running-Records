/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewRunComponent } from './new-run.component';

describe('NewRunComponent', () => {
  let component: NewRunComponent;
  let fixture: ComponentFixture<NewRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
