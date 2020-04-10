import { NgModule } from '@angular/core';

import { P404Component } from './error/404.component';
import { P500Component } from './error/500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { WebStorageService } from 'app/shared/services/common/webStorage.service';
import { AppLoaderComponent } from 'app/shared/components';
import { SharedModule } from 'app/shared/ShareModules';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner'

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    Ng2LoadingSpinnerModule.forRoot({})
  ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    WebStorageService
  ]
})
export class PagesModule { }
