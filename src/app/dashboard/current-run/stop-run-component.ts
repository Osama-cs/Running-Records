import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-run',
  template: `<section fxLayout="column" fxLayoutAlign="center center">
    <h1 mat-dialog-title>Are you sure you want to end your run?</h1>
    <div mat-dialog-content>
      <p>
        Your time is: {{ passedRunData.minutes }} Minutes
        {{ passedRunData.seconds }} Seconds
      </p>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Yes</button>
      <button mat-button [mat-dialog-close]="false">No</button>
    </div>
  </section>`,
})
export class StopRunComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedRunData: any) {}
}
