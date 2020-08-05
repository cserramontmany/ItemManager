import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/models/item.model';
import { FavouritesService } from '../shared/services/favourites.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: Item;

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
