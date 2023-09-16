import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RunService } from '../run.service';
import { Run } from '../run.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-run',
  templateUrl: './new-run.component.html',
  styleUrls: ['./new-run.component.css'],
})
export class NewRunComponent implements OnInit, OnDestroy {
  runs: Run[];
  runSubscription: Subscription;

  constructor(private runService: RunService) {}


  ngOnInit() {
    this.runSubscription = this.runService.runsChanged.subscribe(
      (runs) => (this.runs = runs)
    );
    this.runService.fetchAvailableRuns();
  }

  onStartRun(form: NgForm) {
    this.runService.startRun(form.value.runDistance);
  }

  ngOnDestroy(){
    this.runSubscription.unsubscribe();
  }

}
