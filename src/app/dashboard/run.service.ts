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
      runSeconds: 25,
      runMinutes: 10,
    },
    {
      id: '10KM',
      name: '10 KM',
      runSeconds: 45,
      runMinutes: 15,
    },
    {
      id: '15KM',
      name: '15 KM',
      runSeconds: 32,
      runMinutes: 20,
    },
    {
      id: '15+KM',
      name: '15+ KM',
      runSeconds: 25,
      runMinutes: 30,
    },
  ];

  private runningRun!: Run;
  private runs: Run[] = [];

  getAvailableRuns() {
    return this.availableRuns.slice();
  }

  startRun(selectedId: string) {
    this.runningRun = this.availableRuns.find((ex) => ex.id === selectedId);
    this.runChanged.next({ ...this.runningRun });
  }

  completedRun(seconds: number, minutes: number) {
    this.runs.push({
      ...this.runningRun,
      runSeconds: (this.runningRun.runSeconds = seconds),
      runMinutes: (this.runningRun.runMinutes = minutes),
      date: new Date(),
    });
    this.runningRun = null;
    this.runChanged.next(null);
  }

  getCurrentRun() {
    return { ...this.runningRun };
  }

  getCompletedRuns(){
    return this.runs.slice();
  }

  constructor() {}
}
