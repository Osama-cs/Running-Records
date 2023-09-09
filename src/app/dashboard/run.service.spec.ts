/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RunService } from './run.service';

describe('Service: Run', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RunService]
    });
  });

  it('should ...', inject([RunService], (service: RunService) => {
    expect(service).toBeTruthy();
  }));
});
