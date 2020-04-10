import { Component, Injectable} from '@angular/core';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
    'es-CO': {
      weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
      months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    }
  };

  @Injectable()
  export class I18n {
    language = 'es-CO';
  }

@Injectable()
    export class CustomDatepickerI18n extends NgbDatepickerI18n {
    constructor(private _i18n: I18n) {
        super();
    }

    getWeekdayShortName(weekday: number): string {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    }

    getMonthShortName(month: number): string {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    }

    getMonthFullName(month: number): string {
        return this.getMonthShortName(month);
    }
}
