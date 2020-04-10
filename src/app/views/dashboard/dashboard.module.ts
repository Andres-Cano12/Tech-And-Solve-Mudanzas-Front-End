import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    DashboardRoutingModule,
    BsDropdownModule,
    FormsModule,
    NgbModule,
    SharedModule,
    CommonModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
