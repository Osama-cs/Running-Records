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
  constructor(private runService: RunService) {}

  ngOnInit() {
    this.addRun;
  }

  addRun(form: NgForm){
    console.log("HELLO");
    this.runService.addRuns(form.value.date);
    this.runService.addRuns(form.value.distance);
    this.runService.addRuns(form.value.dropdown);
    this.runService.addRuns(form.value.calories);
    console.log("hi");
  }
}
