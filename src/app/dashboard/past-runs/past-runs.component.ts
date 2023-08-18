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
  displayedColumns = ["date", "distance", "mood", "calories"];
  dataSource = new MatTableDataSource<Run>();

  constructor(private runService: RunService) { }

  ngOnInit() {
    console.log("yo");
    this.dataSource.data = this.runService.getAvailableRuns();
    console.log("hey");

  }

}
