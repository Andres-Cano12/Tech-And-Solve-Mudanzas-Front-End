import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

   private showSpinners= new BehaviorSubject(false);
   currentShowSpinner = this.showSpinners.asObservable();
   
  constructor() { 
  }

  showSpinner(showSpinner: string): void {
    localStorage.setItem('showSpinner', showSpinner);
  }

  getShowSpinner(): boolean {
    var showSpinner = localStorage.getItem('showSpinner')
    var boolValue = (showSpinner =="true");
    return boolValue
  }
}