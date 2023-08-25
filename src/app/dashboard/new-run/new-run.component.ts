import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RunService } from '../run.service';
import { Run } from '../run.model';

@Component({
  selector: 'app-new-run',
  templateUrl: './new-run.component.html',
  styleUrls: ['./new-run.component.css'],
})
export class NewRunComponent implements OnInit {
  // @Output() runStart = new EventEmitter<void>();

  runs: Run[] = [];

  constructor(private runService: RunService) {}

  ngOnInit() {
    this.runs = this.runService.getAvailableRuns();
  }

  onStartRun(){
    this.runService.startRun();
  }
}
