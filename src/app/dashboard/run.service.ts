import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Run } from './run.model';

@Injectable({
  providedIn: 'root',
})
export class RunService {
  runChanged = new Subject<Run>();
  private availableRuns: Run[] = [
    {
      id: '5KM',
      name: '5 KM',
      runSeconds: '25 Seconds',
      runMinutes: '10 Minutes',
      calories: 70,
    },
    {
      id: '10KM',
      name: '10 KM',
      runSeconds: '45 Seconds',
      runMinutes: '15 Minutes',
      calories: 100,
    },
    {
      id: '15KM',
      name: '15 KM',
      runSeconds: '32 Seconds',
      runMinutes: '20 Minutes',
      calories: 130,
    },
    {
      id: '15+KM',
      name: '15+ KM',
      runSeconds: '25 Seconds',
      runMinutes: '30 Minutes',
      calories: 200,
    },
  ];

  private runningRun!: Run;

  getAvailableRuns() {
    return this.availableRuns.slice();
  }

  startRun(selectedId: string) {
    this.runningRun! = this.availableRuns.find(ex => ex.id === selectedId);
    this.runChanged.next({ ...this.runningRun });
  }

  constructor() {}
}
