import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ItemManagerComponent } from './item-manager.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { OrderPipe } from 'ngx-order-pipe';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { FavouriteModalComponent } from '../favourite-modal/favourite-modal.component';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FavouritesService } from '../shared/services/favourites.service';
import { ItemHttpService } from '../shared/services/itemHttp.service';
import { Observable, Observer } from 'rxjs';
import { ItemFavourite } from '../shared/models/item-favourite.model';
import { Item } from '../shared/models/item.model';

describe('ItemManagerComponent', () => {
  let component: ItemManagerComponent;
  let fixture: ComponentFixture<ItemManagerComponent>;
  let filterPipe: FilterPipe;
  let orderPipe: OrderPipe;
  let favModal: FavouriteModalComponent;
  let favService: FavouritesService;
  //let httpService: ItemHttpService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [
        ItemManagerComponent,
        FilterPipe,
        OrderPipe,
        FavouriteModalComponent,
      ],
      providers: [OrderPipe, InfiniteScrollDirective, FavouriteModalComponent],
    });
    await TestBed.compileComponents();

    //let comp = fixture.debugElement.componentInstance as ItemManagerComponent;
    fixture = TestBed.createComponent(ItemManagerComponent);
    component = fixture.componentInstance;
    filterPipe = new FilterPipe();
    orderPipe = new OrderPipe();
    favModal = new FavouriteModalComponent(favService);
    fixture.detectChanges();
    let httpService = fixture.debugElement.injector.get(ItemHttpService);
    spyOn(httpService, 'getItemsFromEndPoint').and.returnValue(
      Observable.create((observer: Observer<ItemFavourite[]>) => {
        let list: ItemFavourite[]=
        [
          new ItemFavourite(new Item()),
          new ItemFavourite(new Item()),
          new ItemFavourite(new Item()),
          new ItemFavourite(new Item()),
          new ItemFavourite(new Item()),
          new ItemFavourite(new Item()),
          new ItemFavourite(new Item())
        ];
        observer.next(list);
        return observer;
      })
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getItems() => asking for elements; should be 7', () => {
    component.getItems();
    expect(component.items).not.toBe(undefined);
    expect(component.items.length).toBe(7);
  });

  
  it('getSomeItems() => is moving 5 items to other list; should be 5', () => {
    component.getItems();
    component.getSomeItems();
    expect(component.templateItems).not.toBe(undefined);
    expect(component.templateItems.length).toBe(5);
  });
});
