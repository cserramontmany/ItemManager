import { Component, OnInit, Input } from '@angular/core';
import { ItemFavourite } from 'src/app/shared/models/item-favourite.model';
import { FavouritesService } from 'src/app/shared/services/favourites.service';

@Component({
  selector: 'app-item-small',
  templateUrl: './item-small.component.html',
  styleUrls: ['./item-small.component.scss']
})
export class ItemSmallComponent implements OnInit {
  @Input() item: ItemFavourite;
  constructor(private favService: FavouritesService) {}

  ngOnInit(): void {
  }

  toggleFav(){
    this.item.favourite = !this.item.favourite;
    if (this.item.favourite) {
      this.favService.addToFavourites(this.item);
    }else{
      this.favService.removeFromFavourites(this.item)
    }
  }
}
