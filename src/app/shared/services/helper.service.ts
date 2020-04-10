import { Injectable } from "@angular/core";
import { DateModel } from "../models/common/date.model";

@Injectable()
export class HelperService {

    constructor() {}

    dateToDateModel(date: string): DateModel {
        const newDate: DateModel = new DateModel();
        const splitDate = date.split('-');
        newDate.year = Number(splitDate[0]);
        newDate.month = Number(splitDate[1]);
        newDate.day = Number(splitDate[2].split('T')[0]);
        return newDate;
    }

    dateToString(date: DateModel): string {
        const newDate = `${date.year}-${date.month}-${date.day}T00:00:00`;
        return newDate;
    }

    dateFormatString(date: DateModel): string {
        const day = date.day.toString().length === 1 ? `0${date.day}` : date.day;
        const month = date.month.toString().length === 1 ? `0${date.month}` : date.month;

        const newDate = `${date.year}-${month}-${day}T00:00:00`;
        return newDate;
    }

    convertDateToString(date: Date): string {
        const day = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();

        const month = date.getMonth() + 1;
        const monthR = month.toString().length === 1 ? `0${month}` : month;

        const newDate = `${date.getFullYear()}-${monthR}-${day}T00:00:00`;
        return newDate;
    }

    substractDatesToMonths(startDate: Date, endDate: Date) {
        const timeDiff = startDate.getTime() - endDate.getTime();
        return Math.ceil(timeDiff / (1000 * 3600 * 24 * 30));
    }
}