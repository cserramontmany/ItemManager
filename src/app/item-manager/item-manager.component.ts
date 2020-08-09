import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { ItemService } from './../shared/services/item.service';
import { finalize } from 'rxjs/operators';
import { ItemFavourite } from '../shared/models/item-favourite.model';
import { AppConst } from '../shared/consts';
import { ViewportScroller } from '@angular/common';
import { OrderPipe } from 'ngx-order-pipe';
import { NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss'],
})
export class ItemManagerComponent implements OnInit {
  items: ItemFavourite[] = [];
  templateItems: ItemFavourite[] = [];
  counter: number = 0;
  availableItems: boolean = true;
  pageYoffset: number;
  itemFields: string[];
  filterValue: string;
  fieldValue: string;

  orderValue: string;
  reverse: boolean = false;
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  constructor(
    private itemService: ItemService,
    private scroll: ViewportScroller,
    private orderPipe: OrderPipe
  ) {
    this.templateItems = orderPipe.transform(this.items, this.orderValue);
  }

  ngOnInit(): void {
    this.itemFields = AppConst.orderFields;
    this.getItems();
  }

  // asking for the items to the service:
  public getItems(): void {
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
    if (this.templateItems.length === this.items.length) {
      this.availableItems = false;
      return;
    }
    let skip = this.counter * AppConst.elementsToTake;
    let take = AppConst.elementsToTake + skip;
    let itemsToShow = this.items.slice(skip, take);
    itemsToShow.forEach((elem) => {
      this.templateItems.push(elem);
    });
    this.counter++;
    console.log('rendered items : =', this.templateItems.length);
  }
  applyFilters(){
    this.templateItems = this.orderPipe.transform(this.templateItems, this.filterValue, this.reverse)
    this.masonry.reloadItems();
    this.masonry.layout();
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset;
    //console.log(this.pageYoffset)
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }

  onChangeFieldValue(value: string) {
    this.fieldValue = value;
  }
}
