import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StopRunComponent } from './stop-run-component';

@Component({
  selector: 'app-current-run',
  templateUrl: './current-run.component.html',
  styleUrls: ['./current-run.component.css'],
})
export class CurrentRunComponent implements OnInit {
  @Output() runExit = new EventEmitter();

  progress = 0;

  timer!: number;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer(){
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopRunComponent, {
      data: {
        progress: this.progress,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.runExit.emit();
      } else {
        this.startOrResumeTimer();
      }
    });

  }
}
