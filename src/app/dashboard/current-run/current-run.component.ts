import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-run',
  templateUrl: './current-run.component.html',
  styleUrls: ['./current-run.component.css'],
})
export class CurrentRunComponent implements OnInit {
  progress = 0;

  timer!: number;

  constructor() {}

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
    }, 1000) as any;
  }

  onStop(){
    clearInterval(this.timer);
  }
}
