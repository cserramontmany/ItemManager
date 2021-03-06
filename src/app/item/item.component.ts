import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/models/item.model';
import { FavouritesService } from '../shared/services/favourites.service';
import { ItemFavourite } from '../shared/models/item-favourite.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: ItemFavourite;

  constructor(private favService: FavouritesService) {}

  toggleFav(){
    this.item.favourite = !this.item.favourite;
    if (this.item.favourite) {
      this.favService.addToFavourites(this.item);
    }else{
      this.favService.removeFromFavourites(this.item)
    }
  }
}
