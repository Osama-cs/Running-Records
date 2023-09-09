import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RunService } from '../run.service';

@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.css'],
})
export class RunComponent implements OnInit {
  ongoingRun = false;
  runSubscription!: Subscription;

  constructor(private runService: RunService) {}

  ngOnInit() {
    this.runSubscription = this.runService.runChanged.subscribe(
      run => {
        if (run) {
          this.ongoingRun = true;
        } else {
          this.ongoingRun = false;
        }
      }
    );
  }
}
