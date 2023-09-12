import { Subject, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Run } from './run.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class RunService {
  runChanged = new Subject<Run>();
  runsChanged = new Subject<Run[]>();
  finishedRunsChanged = new Subject<Run[]>();
  private availableRuns: Run[] = [];
  private runningRun!: Run;

  constructor(private dB: AngularFirestore) {}

  fetchAvailableRuns() {
    this.dB
      .collection('availableRuns')
      .snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((doc) => {
            const data: any = doc.payload.doc.data();
            return {
              id: doc.payload.doc.id,
              ...data,
            };
          });
        })
      )
      .subscribe((runs: Run[]) => {
        this.availableRuns = runs;
        this.runsChanged.next([...this.availableRuns]);
      });
  }

  startRun(selectedId: string) {
    this.runningRun = this.availableRuns.find((ex) => ex.id === selectedId);
    this.runChanged.next({ ...this.runningRun });
  }

  completedRun(seconds: number, minutes: number) {
    this.addRunDataToFirestore({
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

  fetchCompletedRuns() {
    this.dB
      .collection('completedRuns')
      .valueChanges()
      .subscribe((runs: Run[]) => {
        this.finishedRunsChanged.next(runs);
      });
  }

  private addRunDataToFirestore(run: Run) {
    this.dB.collection('completedRuns').add(run);
  }
}
