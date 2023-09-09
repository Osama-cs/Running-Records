import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Run } from '../run.model';
import { RunService } from '../run.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-past-runs',
  templateUrl: './past-runs.component.html',
  styleUrls: ['./past-runs.component.css']
})
export class PastRunsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['date', 'name', 'minutes', 'seconds'];
  dataSource = new MatTableDataSource<Run>();

  @ViewChild(MatSort) tableSort: MatSort;
  @ViewChild(MatPaginator) tablePaginator: MatPaginator;

  constructor(private runService: RunService ) { }

  ngOnInit() {
    this.dataSource.data = this.runService.getCompletedRuns();
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
      this.dataSource.sort = this.tableSort;
      this.dataSource.paginator = this.tablePaginator;
  }

}
