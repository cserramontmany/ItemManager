import { Pipe, PipeTransform } from '@angular/core';
import { ItemFavourite } from '../models/item-favourite.model';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  // transform(itemsInput: unknown, ...args: unknown[]): unknown {
  transform(
    itemsInput: ItemFavourite[],
    filterString: string ,
    fieldName?: string
  ): ItemFavourite[] {
    //without filters : do nothing
    if (itemsInput.length === 0 || !filterString) {
      return itemsInput;
    }
    const resultArray: ItemFavourite[] = [];
    if (fieldName) {
      for (const item of itemsInput) { 
          let lowerCase = item[fieldName].toString().toLowerCase();// in case it's a number (price) we cast toString
          if (lowerCase.includes(filterString.toLowerCase())) {   // we chek if includes some part of the input itemsInput
            resultArray.push(item);
        }
      }
      // filter by any field
    } else {
      for (const item of itemsInput) {
        item.description.toLowerCase();
        item.email.toLowerCase();
        item.title.toLowerCase();
        if(
          item.description.includes(filterString.toLowerCase()) ||
          item.email.includes(filterString.toLowerCase()) ||
          item.title.includes(filterString.toLowerCase()) ||
          //item.price == + filterString
          // price as string to serch for 00
          item.price.toString().includes(filterString)
        ){
          resultArray.push(item);
        }
      }

    }
    return resultArray;
  }
}

/* CARLES TODO NOTES: 
I would like to : 
filter price from a range,



*/