import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Configuration } from '../../../../app/shared/models/common/configuracion.model'
import { NgxSmartModalService } from 'ngx-smart-modal';
// Component

import { MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api';

import * as _ from 'underscore';
import * as $ from 'jquery';

import { DialogService } from 'primeng/api';

import { Router } from '@angular/router';
import { WebStorageService } from 'app/shared/services/common/webStorage.service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  providers: [ Configuration, MessageService, DialogService, WebStorageService]
})
export class AppHeaderComponent implements OnInit {

  urlServer = '';
  urlImage = "";
  hasCountrySelected = false;

  constructor(
    protected router: Router,
    public _dialogService: DialogService,
    private _authService: AuthService,
    private _configuration: Configuration,
    private _webStorageService: WebStorageService

  ) {
    this.urlServer = this._configuration.Server;
  }

  ngOnInit() {
  }

  changeCountry() {
    this.router.navigate(['/start/list-countries']);
  }

  logout() {
    this._authService.logout();
  
  }
}
