import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarecubic'
})
export class SquarecubicPipe implements PipeTransform {

  transform(value, args) {
    return Math.pow(value, args);
  }

}
