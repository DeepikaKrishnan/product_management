import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(value) {
    let output = 1;
    for(let i=1;i<=value;i++) {
      output = output*i;
    }
    return output;
  }

}
