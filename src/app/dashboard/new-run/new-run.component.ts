import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RunService } from '../run.service';
import { Run } from '../run.model';
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-new-run',
  templateUrl: './new-run.component.html',
  styleUrls: ['./new-run.component.css'],
})
export class NewRunComponent implements OnInit, OnDestroy {
  runs: Run[];
  isPageLoading = true;
  private runSubscription: Subscription;
  private loadingSubscription: Subscription;

  constructor(private runService: RunService, private UiService: UIService) {}


  ngOnInit() {
    this.loadingSubscription = this.UiService.loadingStateChanged.subscribe(
      isLoading => {
        this.isPageLoading = isLoading;
      }
    );
    this.runSubscription = this.runService.runsChanged.subscribe(
      (runs) => (this.runs = runs)
    );
    this.fetchRuns();
  }

  fetchRuns() {
    this.runService.fetchAvailableRuns();
  }

  onStartRun(form: NgForm) {
    this.runService.startRun(form.value.runDistance);
  }

  ngOnDestroy(){
    this.runSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
  }

}
