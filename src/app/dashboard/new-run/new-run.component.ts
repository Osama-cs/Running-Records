import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-run',
  templateUrl: './new-run.component.html',
  styleUrls: ['./new-run.component.css'],
})
export class NewRunComponent implements OnInit {
  @Output() runStart = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onStartRun(){
    this.runStart.emit();
  }
}
