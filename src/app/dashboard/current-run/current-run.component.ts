import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StopRunComponent } from './stop-run-component';
import { RunService } from '../run.service';

@Component({
  selector: 'app-current-run',
  templateUrl: './current-run.component.html',
  styleUrls: ['./current-run.component.css'],
})
export class CurrentRunComponent implements OnInit {

  seconds = 0;

  minutes = 0;

  timer!: number;

  constructor(private dialog: MatDialog, private runService: RunService) {}

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer(){
    this.timer = setInterval(() => {
      this.seconds = this.seconds + 1;
      if (this.seconds == 60){
        this.minutes++;
        this.seconds = 0;
      }
      
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopRunComponent, {
      data: {
        seconds: this.seconds,
        minutes: this.minutes,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.runService.completedRun(this.seconds, this.minutes);
      } else {
        this.startOrResumeTimer();
      }
    });

  }
}
