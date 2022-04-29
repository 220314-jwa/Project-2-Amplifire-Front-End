import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
 // implement this to do what we want the pipe to do
  // value is the value to the left of the pipe operator (|)
  // and args is any other parameters we want the pipe to have
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
