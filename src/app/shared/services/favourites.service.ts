import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private favItems: Item[] = [];
  constructor() { }

  getFavouriteList(): Item[]{
    return this.favItems;
  }

  addToFavourites(item:Item){
    if (item) {
      this.favItems.push(item);

    }
  }

  removeFromFavourites(item:Item){
    if (item) {
      let index = this.favItems.indexOf(item);
      if(index >= 0 ){
        this.favItems.splice(index, 1)
      }
    }
  }
}
