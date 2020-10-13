import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieDuration',
})
export class MovieDurationPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 0 && value / 60 < 1) {
      return this.calcMinutes(value);
    } else {
      let hours = Math.trunc(value / 60);
      let minutes = value % 60;
      return `${this.calcHours(hours)} ${this.calcMinutes(minutes)}`;
    }
  }

  calcMinutes(value: number): string {
    if (value === 0) return '';
    let units = value % 10;
    if (units === 1 && value != 11) return value + ' минута';
    else if (units > 4 || (value > 9 && value < 21)) return value + ' минут';
    else return value + ' минуты';
  }

  calcHours(value: number): string {
    let units = value % 10;
    if (units === 1 && value != 11) return value + ' час';
    else if (units > 4 || (value > 9 && value < 21)) return value + ' часов';
    else return value + ' часа';
  }
}
