import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ItemManagerComponent } from './item-manager.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { OrderPipe } from 'ngx-order-pipe';

describe('ItemManagerComponent', () => {
  let component: ItemManagerComponent;
  let fixture: ComponentFixture<ItemManagerComponent>;
  let filterPipe: FilterPipe;
  let orderPipe: OrderPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ItemManagerComponent, FilterPipe, OrderPipe ],
      providers:[OrderPipe]
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
