import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ItemService } from '../shared/services/item.service';
import { Item } from '../shared/models/item.model';
import { finalize, concatAll } from 'rxjs/operators';
import { ItemFavourite } from '../shared/models/item-favourite.model';
@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss'],
})
export class ItemManagerComponent implements OnInit {
  items: ItemFavourite[] = [];
  constructor(private itemService: ItemService) {}
  
  ngOnInit(): void {
    this.getItems();
  }

  public getItems():void{
    this.itemService
      .getFavItems()
      .pipe(
        finalize(() => {
          console.log(JSON.stringify(this.items, undefined, 4));
        })
      )
      .subscribe((result) => (this.items = result));
  }
}