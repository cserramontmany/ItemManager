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
import { InfiniteScrollModule, } from 'ngx-infinite-scroll';

describe('ItemManagerComponent', () => {
  let component: ItemManagerComponent;
  let fixture: ComponentFixture<ItemManagerComponent>;
  let filterPipe: FilterPipe;
  let orderPipe: OrderPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule ],
      declarations: [ItemManagerComponent, FilterPipe, OrderPipe, FavouriteModalComponent ],
      providers:[OrderPipe, InfiniteScrollDirective, FavouriteModalComponent ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ItemManagerComponent);
    component = fixture.componentInstance;
    filterPipe = new FilterPipe();
    orderPipe = new OrderPipe();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get Items',() => {
    component.getSomeItems()
    expect(component.items).toBeDefined();
  });

  
});
