import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePersonnalisee'
})
export class DatePersonnaliseePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
