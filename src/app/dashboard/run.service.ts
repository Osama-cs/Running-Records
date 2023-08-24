import { Injectable } from '@angular/core';
import { Run } from './run.model';

@Injectable({
  providedIn: 'root'
})
export class RunService {
  availableRuns: Run[] = [
    {id: '5KM', name: '5KM', time: '10 Minutes 25 Seconds', calories: 70},
    {id: '10KM', name: '10KM', time: '15 Minutes 45 Seconds', calories: 100},
    {id: '15KM', name: '15KM', time: '20 Minutes 32 Seconds', calories: 130},
    {id: '15+KM', name: '15+KM', time: '30 Minutes 25 Seconds', calories: 200}
  ];

constructor() { }

}
