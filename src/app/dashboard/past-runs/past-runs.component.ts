import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Run } from '../run.model';
import { RunService } from '../run.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-past-runs',
  templateUrl: './past-runs.component.html',
  styleUrls: ['./past-runs.component.css'],
})
export class PastRunsComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['date', 'name', 'minutes', 'seconds'];
  dataSource = new MatTableDataSource<Run>();
  private pastRunsChangedSubscription: Subscription;

  @ViewChild(MatSort) tableSort: MatSort;
  @ViewChild(MatPaginator) tablePaginator: MatPaginator;

  constructor(private runService: RunService) {}

  ngOnInit() {
    this.pastRunsChangedSubscription = this.runService.finishedRunsChanged.subscribe(
      (runs: Run[]) => {
        this.dataSource.data = runs;
    });
    this.runService.fetchCompletedRuns();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.tableSort;
    this.dataSource.paginator = this.tablePaginator;
  }

  ngOnDestroy() {
   this.pastRunsChangedSubscription.unsubscribe();
  }
}
