/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PastRunsComponent } from './past-runs.component';

describe('PastRunsComponent', () => {
  let component: PastRunsComponent;
  let fixture: ComponentFixture<PastRunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastRunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
