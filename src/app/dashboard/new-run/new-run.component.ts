import { Component, OnInit } from '@angular/core';
import { RunService } from '../run.service';
import { Run } from '../run.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-run',
  templateUrl: './new-run.component.html',
  styleUrls: ['./new-run.component.css'],
})
export class NewRunComponent implements OnInit {
  private newRun!: Run;
  private runs: Run[] = [];
  constructor(private runService: RunService) {}

  ngOnInit() {
    this.addRun;
  }

  incrementId(){
      
  }

  addRun(form: NgForm){
    this.runService.addRuns(form.value);
  }
}
