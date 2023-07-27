import { Injectable } from '@angular/core';
import { Run } from './run.model';

@Injectable({
  providedIn: 'root'
})
export class RunService {

  private availableRuns: Run[] =[
    {dayOfRun: new Date(), distance: 500, mood: "Rough" },
    // {dayOfRun: new Date("05/13/2023"), distance: 300, mood: "Good" },
    // {dayOfRun: new Date("04/30/2023"), distance: 400, mood: "Rough" }, 
  ]

  addRuns(run: Run){
    this.availableRuns.push({...run});
  }

  getAvailableRuns(){
    return this.availableRuns.slice();
  }
  
constructor() { }

}
