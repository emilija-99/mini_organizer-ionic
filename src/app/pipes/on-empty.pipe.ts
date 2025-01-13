import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onEmpty',
  standalone: true
})
export class OnEmptyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(!value){
      return '-';
    }else{
      return value;
    }
  }

}
