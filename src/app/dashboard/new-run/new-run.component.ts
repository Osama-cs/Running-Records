import { Component, OnInit, ViewChild } from '@angular/core';
import { RunService } from '../run.service';
import { Run } from '../run.model';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-run',
  templateUrl: './new-run.component.html',
  styleUrls: ['./new-run.component.css'],
})
export class NewRunComponent implements OnInit {

  constructor(private runService: RunService) {}

  @ViewChild('fp') Forms!: NgForm;

  ngOnInit() {
  }

  onSubmit(){
    console.log("HELLO");
    this.runService.addRuns({
      ...this.Forms.value
    });
    console.log(this.runService.getAvailableRuns());
    console.log("hi");
  }
}
