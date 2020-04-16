import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(value) {
    let rand = Math.random() * value;
    if (rand>100) {
      rand = 100;
      return rand;
    } else if(rand<0) {
      rand = 0;
      return rand;
    } else {
      return rand;
    }
  }

}
