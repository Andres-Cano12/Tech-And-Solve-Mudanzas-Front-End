import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent 
{
  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }

 }
