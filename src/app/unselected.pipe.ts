import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unselected',
})
export class UnselectedPipe implements PipeTransform {

  transform(list: any, selectedList: any): any {
    console.log(selectedList.length);
    console.log(list.length);
    if (selectedList.length > 0) {
      let l = list.filter(item => selectedList.every(selitem => selitem.attributeName !== item));
      console.log( l);
      return l;
    }
    return list;

  }

}
