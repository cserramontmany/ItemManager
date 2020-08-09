import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { ItemFavourite } from '../models/item-favourite.model';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(
    itemsInput: ItemFavourite[],
    reverse?: boolean,
    field?: string
  ): ItemFavourite[] {
    // let itemsToReturn = _.sortBy(itemsInput, fieldNames);
    // if (reverse) {
    //   itemsToReturn = _.reverse(itemsToReturn);
    // }
    // return itemsToReturn;

    if (!Array.isArray(itemsInput)) {
      return;
    }

    //without inputs : do nothing
    if (itemsInput.length === 0 || !field) {
      return itemsInput;
    }

    itemsInput.sort((a: any, b: any) => {
      //for (let i = 0; i < fieldNames.length; i++) {
        //const field = fieldNames[i];
        // if is string  we need to save it before force lowercase;
        // let tempA = a[field];
        // let tempB = b[field];
        // if (typeof a[field] === 'string') { // if i
        //   a[field] = a[field].toLowerCase();
        //   b[field] = b[field].toLowerCase();
        // }
        
        if (a[field] > b[field]) {
          return reverse ? 1 : -1;
        } else if (a[field] > b[field]) {
          return reverse ? -1 : 1;
        } else {
          return 0;
        //}
        // strings lowercased returned to initial state.
          // a[field]=tempA;
          // b[field]=tempB;
      }
    });
    //if (reverse) itemsInput = _.reverse(itemsInput);

    return itemsInput;
  }
}

/* CARLES TODO NOTES: 
I would like to : 
sort ignoring case,



*/
