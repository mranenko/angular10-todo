import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DateService {
  today = new Date();

  readonly days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  readonly months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor() {
  }

  getTodayDay(): string {
    return this.days[this.today.getDay()];
  }

  getTodayDate(): string {
    return `${this.months[this.today.getMonth()]} 
      ${this.today.getDate()}, 
      ${this.today.getFullYear()}`;
  }
}
