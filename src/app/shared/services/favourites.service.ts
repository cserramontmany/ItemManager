import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';
import { ItemFavourite } from '../models/item-favourite.model';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private favItems: ItemFavourite[] = [];
  constructor() { }

  getFavouriteList(): ItemFavourite[]{
    return this.favItems;
  }

  addToFavourites(item:ItemFavourite){
    if (item) {
      this.favItems.push(item);

    }
  }

  removeFromFavourites(item:ItemFavourite){
    if (item) {
      let index = this.favItems.indexOf(item);
      if(index >= 0 ){
        this.favItems.splice(index, 1)
      }
    }
  }
}
