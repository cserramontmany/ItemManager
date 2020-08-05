import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ItemServiceService } from './../shared/services/item-service.service';
import { Item } from '../shared/models/item.model';
import { finalize, concatAll } from 'rxjs/operators';
@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss'],
})
export class ItemManagerComponent implements OnInit {
  items: Item[] = [];
  constructor(private itemService: ItemServiceService) {}
  
  ngOnInit(): void {
    this.getItems();
  }

  
  public getItems():void{
    this.itemService
      .getItems()
      .pipe(
        finalize(() => {
          //console.log(JSON.stringify(this.items));
        })
      )
      .subscribe((result) => (this.items = result));
  }
}