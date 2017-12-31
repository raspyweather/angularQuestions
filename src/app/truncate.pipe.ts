import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number, disabled?:boolean): any {
  
    if ( value.length > length && !disabled) {
      return value.substr(0, length)+"…";
    }
    return value;
  }

}
