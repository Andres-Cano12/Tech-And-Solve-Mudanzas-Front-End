import { Component, EventEmitter, Input, Output, Injectable } from '@angular/core';
import { DateModel } from '../../models/common/date.model';
import { HelperService } from '../../services/helper.service';
import {NgbDatepickerI18n, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n } from './app-datepicker-language';

@Component({
  selector: 'app-datepicker',
  templateUrl: './app-datepicker.component.html',
  styleUrls: ['app-datepicker.component.scss'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
})
export class AppDatePickerComponent {
  @Input() dateModel;
  @Input() disabled = false;
  dateString = '';

  @Output('updateDate') change: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _helper: HelperService,
    config: NgbDatepickerConfig
  ) {
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};
  }

  changeDate() {
    this.dateString = this._helper.dateToString(this.dateModel);
  }

}
