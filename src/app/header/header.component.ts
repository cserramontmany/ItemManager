import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FavouritesService } from '../shared/services/favourites.service';
import { Item } from '../shared/models/item.model';
import { FavouriteModalComponent } from '../favourite-modal/favourite-modal.component';
import { ItemFavourite } from '../shared/models/item-favourite.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: ItemFavourite[] = [];
  @ViewChild('fav') modal: FavouriteModalComponent;
  
  constructor(private favService: FavouritesService) {}

  ngOnInit(): void {
    this.checkFavs();
  }

  checkFavs() {
    this.items = this.favService.getFavouriteList();
  }

  showFavs():void{
    //show modal: 
    if (this.items.length > 0 ) {
      this.modal.show();
    }
  }
}
