import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oddeven'
})
export class OddevenPipe implements PipeTransform {

  transform(value) {
    let output = '';
    for(var i=0; i<value.length; i++) {
      if (i%2 == 0) {
        output += value[i].toLowerCase();
      } else {
        output += value[i].toUpperCase();
      }
    }
    return output;
  }

}
