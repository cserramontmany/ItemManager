import { Component, OnInit, HostListener } from '@angular/core';
import { ItemService } from './../shared/services/item.service';
import { finalize } from 'rxjs/operators';
import { ItemFavourite } from '../shared/models/item-favourite.model';
import { AppConst } from '../shared/consts';

@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss'],
})
export class ItemManagerComponent implements OnInit {
  items: ItemFavourite[] = [];
  templateItems: ItemFavourite[] = [];
  counter: number= 0;
  constructor(private itemService: ItemService) {}
  
  ngOnInit(): void {
    this.getItems();
  }

  // asking for the items to the service:
  public getItems():void{
    this.itemService
      .getFavItems()
      .pipe(
        finalize(() => {
          this.getSomeItems();
        })
      )
      .subscribe((result) => (this.items = result));
  }

  // sending the items to the template by groups (of 5)
  // and asked for more from template
  getSomeItems() {
    let skip = this.counter * AppConst.elementsToTake;
    let take = AppConst.elementsToTake + skip;
    let itemsToShow = this.items.slice(skip, take)
    itemsToShow.forEach(elem => {
      this.templateItems.push(elem);
    });
    this.counter++;
  }

  // @HostListener('scroll', ['$event']) // for scroll events of the current element
@HostListener('window:scroll', ['$event']) // for window scroll events
onScroll(event) {
  this.getSomeItems()
  console.log("tachan", event)
}
}