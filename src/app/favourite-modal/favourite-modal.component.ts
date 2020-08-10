import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../shared/services/favourites.service';
import { ItemFavourite } from '../shared/models/item-favourite.model';
import { AppConst } from '../shared/consts';

@Component({
  selector: 'app-favourite-modal',
  templateUrl: './favourite-modal.component.html',
  styleUrls: ['./favourite-modal.component.scss'],
})
export class FavouriteModalComponent implements OnInit {
  showModal: boolean = false;
  items: ItemFavourite[] = [];
  filterValue:string;
  filterField:string;

  constructor(private favService: FavouritesService) {}

  ngOnInit(): void {
    this.items =this.favService.getFavouriteList();
    this.filterField = AppConst.orderFields[0]; // title
  }
  
  show(): void {
    this.showModal = true;
  }

  close(): void {
    this.showModal = false;
  }
}
