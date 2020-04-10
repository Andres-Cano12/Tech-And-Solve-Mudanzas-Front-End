import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    InputTextModule,    
} from 'primeng/primeng';


@NgModule({
  imports: [
    InputTextModule
  ],
  exports: [
    InputTextModule
  ]
})
export class NgPrimeModule { }