import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../shared/services/favourites.service';
import { ItemFavourite } from '../shared/models/item-favourite.model';

@Component({
  selector: 'app-favourite-modal',
  templateUrl: './favourite-modal.component.html',
  styleUrls: ['./favourite-modal.component.scss'],
})
export class FavouriteModalComponent implements OnInit {
  showModal: boolean = false;
  items: ItemFavourite[] = [];

  constructor(private favService: FavouritesService) {}

  ngOnInit(): void {
    this.items =this.favService.getFavouriteList();
  }
  
  show(): void {
    this.showModal = true;
  }

  close(): void {
    this.showModal = false;
  }
}
