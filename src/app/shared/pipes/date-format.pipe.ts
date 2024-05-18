import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let tzoffset = (new Date(value)).getTimezoneOffset() * 60000 //millisec
    let localISOTime = (new Date(Date.now() - tzoffset)).toISOString().replace('Z', ' ☀︎').replace('T', '. ').replace('-', '. ').replace('-', '. ');
    return localISOTime
    
    // date:'y, MMM d, h:mm:ss a'

    //2022-03-01T10:00:00.000Z
    //return null;
  }

}
