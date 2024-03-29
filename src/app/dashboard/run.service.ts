import { Subject, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Run } from './run.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UIService } from '../shared/ui.service';

@Injectable({
  providedIn: 'root',
})
export class RunService {
  runChanged = new Subject<Run>();
  runsChanged = new Subject<Run[]>();
  finishedRunsChanged = new Subject<Run[]>();
  private availableRuns: Run[] = [];
  private runningRun!: Run;
  private fireBaseSubscription: Subscription[] = [];

  constructor(private dB: AngularFirestore, private UiService: UIService) {}

  fetchAvailableRuns() {
    this.UiService.loadingStateChanged.next(true);
    this.fireBaseSubscription.push(
      this.dB
        .collection('availableRuns')
        .snapshotChanges()
        .pipe(
          map((docArray) => {
            // throw(new Error());
            return docArray.map((doc) => {
              const data: any = doc.payload.doc.data();
              return {
                id: doc.payload.doc.id,
                ...data,
              };
            });
          })
        )
        .subscribe(
          (runs: Run[]) => {
            this.UiService.loadingStateChanged.next(false);
            this.availableRuns = runs;
            this.runsChanged.next([...this.availableRuns]);
          },
          (error) => {
            this.UiService.loadingStateChanged.next(false);
            this.UiService.showSnackbar('Fetching Runs Failed, Please Try Again', null, 3000);
            this.runChanged.next(null);
          }
        )
    );
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
    this.fireBaseSubscription.push(
      this.dB
        .collection('completedRuns')
        .valueChanges()
        .subscribe((runs: Run[]) => {
          this.finishedRunsChanged.next(runs);
        })
    );
  }

  cancelSubscription() {
    this.fireBaseSubscription.forEach((sub) => sub.unsubscribe());
  }

  private addRunDataToFirestore(run: Run) {
    this.dB.collection('completedRuns').add(run);
  }
}
