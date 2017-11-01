import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items, args?: any): any {
    console.log(items);
  
  const  result = items.filter(item => (item.toLowerCase().indexOf(args.toLowerCase())) !== -1);
    return result;
  }

}
