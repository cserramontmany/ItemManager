import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../shared/services/favourites.service';
import { Item } from '../shared/models/item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: Item[] = [];

  constructor(private favService: FavouritesService) {}

  ngOnInit(): void {
    this.checkFavs();
  }

  checkFavs() {
    this.items = this.favService.getFavouriteList();
  }

  showFavs(){
    //show modal: 
  }
}
