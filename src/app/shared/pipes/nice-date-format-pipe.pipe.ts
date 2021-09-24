import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'niceDateFormatPipe',
})
export class NiceDateFormatPipePipe implements PipeTransform {
  transform(value: string): string {
    const givenDate = new Date(value);

    if (this.checkForYesterday(givenDate)) {
      return 'Yesterday';
    }
    if (this.checkForToday(givenDate)) {
      return 'Today';
    }
    if (this.checkForTommorow(givenDate)) {
      return 'Tommorow';
    }
    return value;
  }

  checkForYesterday(givenDate: Date) {
    const sysdte = new Date();
    sysdte.setDate(sysdte.getDate() - 1);

    if (sysdte.toDateString() === givenDate.toDateString()) {
      return true;
    } else {
      return false;
    }
  }

  checkForToday(givenDate: Date) {
    const sysdte = new Date();
    sysdte.setDate(sysdte.getDate() - 0);

    if (sysdte.toDateString() === givenDate.toDateString()) {
      return true;
    } else {
      return false;
    }
  }

  checkForTommorow(givenDate) {
    const sysdte = new Date();
    sysdte.setDate(sysdte.getDate() + 1);

    if (sysdte.toDateString() === givenDate.toDateString()) {
      return true;
    } else {
      return false;
    }
  }
}
