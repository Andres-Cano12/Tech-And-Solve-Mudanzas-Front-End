import { ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import {
  getSeconds,
  getMinutes,
  getHours,
  getDate,
  getMonth,
  getYear,
  setSeconds,
  setMinutes,
  setHours,
  setDate,
  setMonth,
  setYear
} from 'date-fns';
import { NgbDateStruct, NgbTimeStruct, NgbDatepickerI18n, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { I18n, CustomDatepickerI18n } from '../app-datepicker/app-datepicker-language';


export const DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimePickerComponent),
  multi: true
};

@Component({
  selector: 'date-time-picker',
  templateUrl: './date-time-picker.component.html',
  providers: [DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR, I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
})
export class DateTimePickerComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  // @Input() minyear: number;
  // @Input() minmonth: number;
  // @Input() minday: number;

  minyear: number;
  minmonth: number;
  minday: number;

  date: Date;

  dateStruct: NgbDateStruct;

  timeStruct: NgbTimeStruct;

  datePicker: any;

  private onChangeCallback: (date: Date) => void = () => {};

  constructor(private cdr: ChangeDetectorRef, config: NgbDatepickerConfig) {
    // config.minDate = {year: 1900, month: 1, day: 1};
    // config.maxDate = {year: 2099, month: 12, day: 31};    

    var currentTime = new Date()

    this.minyear = currentTime.getFullYear();
    this.minmonth = currentTime.getMonth() + 1;
    this.minday = currentTime.getDate();

    config.minDate = {year: this.minyear, month: this.minmonth, day: this.minday};
    config.maxDate = {year: 2099, month: 12, day: 31};
   }   

  writeValue(date: Date): void {
    this.date = date;
    this.dateStruct = {
      day: getDate(date),
      month: getMonth(date) + 1,
      year: getYear(date)
    };
    this.timeStruct = {
      second: getSeconds(date),
      minute: getMinutes(date),
      hour: getHours(date)
    };
    this.cdr.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {}

  updateDate(): void {
    if (!this.date) {
      this.date = new Date();
    }
    const newDate: Date = setYear(
      setMonth(
        setDate(this.date, this.dateStruct.day),
        this.dateStruct.month - 1
      ),
      this.dateStruct.year
    );
    this.writeValue(newDate);
    this.onChangeCallback(newDate);
  }

  updateTime(): void {
    const newDate: Date = setHours(
      setMinutes(
        setSeconds(this.date, this.timeStruct.second),
        this.timeStruct.minute
      ),
      this.timeStruct.hour
    );
    this.writeValue(newDate);
    this.onChangeCallback(newDate);
  }
}
