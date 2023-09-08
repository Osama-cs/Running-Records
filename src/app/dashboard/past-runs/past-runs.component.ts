import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Run } from '../run.model';
import { RunService } from '../run.service';

@Component({
  selector: 'app-past-runs',
  templateUrl: './past-runs.component.html',
  styleUrls: ['./past-runs.component.css']
})
export class PastRunsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'name', 'minutes', 'seconds'];
  dataSource = new MatTableDataSource<Run>();

  constructor(private runService: RunService ) { }

  ngOnInit() {
    this.dataSource.data = this.runService.getCompletedRuns();
    console.log(this.dataSource);
  }

}
