import { Pipe, PipeTransform } from '@angular/core';
import { ItemFavourite } from '../models/item-favourite.model';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(
    itemsInput: ItemFavourite[],
    filterString: string,
    fieldName?: string
  ): ItemFavourite[] {
    //without filters : do nothing
    if (itemsInput.length === 0 || !filterString) {
      return itemsInput;
    }
    const resultArray: ItemFavourite[] = [];
    let normalizedFilter = this.stringNormalization(filterString);
    if (fieldName) {
      for (const item of itemsInput) {
        let normalized = this.stringNormalization(item[fieldName].toString()); // in case it's a number (price) we cast toString
        if (normalized.includes(normalizedFilter)) {
          // we chek if includes some part of the input itemsInput
          resultArray.push(item);
        }
      }
      // filter by any field
    } else {
      for (const item of itemsInput) {
        let lowDesc = this.stringNormalization(item.description);
        let lowEmail = this.stringNormalization(item.email);
        let lowTitle = this.stringNormalization(item.title);
        let priceString = item.price.toString();
        if (
          lowDesc.includes(normalizedFilter) ||
          lowEmail.includes(normalizedFilter) ||
          lowTitle.includes(normalizedFilter) ||
          priceString.includes(filterString)
        ) {
          resultArray.push(item);
        }
      }
    }
    return resultArray;
  }

  stringNormalization(s: string): string {
    let str = s.toLocaleLowerCase();
    const ACCENTS =
      'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    const NON_ACCENTS =
      'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcIIIIiiiiUUUUuuuuNnSsYyyZz';
    const strAccents: string[] = str.split('');
    const strAccentsOut: string[] = new Array();
    const strAccentsLen: number = strAccents.length;

    for (let y = 0; y < strAccentsLen; y++) {
      if (ACCENTS.indexOf(strAccents[y]) != -1) {
        strAccentsOut[y] = NON_ACCENTS.substr(
          ACCENTS.indexOf(strAccents[y]),
          1
        );
      } else {
        strAccentsOut[y] = strAccents[y];
      }
    }

    const newString: string = strAccentsOut.join('');
    return newString;
  }
}
