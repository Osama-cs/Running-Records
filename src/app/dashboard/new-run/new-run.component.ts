import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RunService } from '../run.service';
import { Run } from '../run.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-run',
  templateUrl: './new-run.component.html',
  styleUrls: ['./new-run.component.css'],
})
export class NewRunComponent implements OnInit {
  runs: Observable<Run[]>;

  constructor(private runService: RunService, private dB: AngularFirestore) {}

  ngOnInit() {
    // this.runs = this.runService.getAvailableRuns();
    this.runs = this.dB
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
      );
  }

  onStartRun(form: NgForm) {
    this.runService.startRun(form.value.runDistance);
  }
}
