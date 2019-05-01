import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cost'
})
export class CostPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let rtn: number = 0;
    for(let item of value) {
      rtn += parseFloat(item.price);
    }
    return rtn;
  }

}
