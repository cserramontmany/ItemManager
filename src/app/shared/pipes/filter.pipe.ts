import { Pipe, PipeTransform } from '@angular/core';
import { ItemFavourite } from '../models/item-favourite.model';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(
    value: ItemFavourite[],
    filterString: { [key: string]: any },
    fieldName?: string
  ): ItemFavourite[] {
    if (value.length === 0 || !filterString) {
      return value;
    }
    const resultArray: ItemFavourite[] = [];
    if (fieldName) {
      for (const item of value) {
        let lowerCase = item[fieldName].toLowerCase();
        if (lowerCase.includes(filterString.toLowerCase())) {
          resultArray.push(item);
        }
      }
      // any field
    } else {
      for (const item of value) {
        item.description.toLowerCase();
        item.email.toLowerCase();
        item.title.toLowerCase();
        if(
          item.description.includes(filterString.toLowerCase()) ||
          item.email.includes(filterString.toLowerCase()) ||
          item.title.includes(filterString.toLowerCase()) ||
          item.price.includes(filterString.toLowerCase())
        ){
          resultArray.push(item);
        }
      }

    }
    return resultArray;
  }
}
