import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ItemManagerComponent } from './item-manager.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';

describe('ItemManagerComponent', () => {
  let component: ItemManagerComponent;
  let fixture: ComponentFixture<ItemManagerComponent>;
  let pipe: FilterPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ItemManagerComponent, , FilterPipe ],
    }).compileComponents();
    fixture = TestBed.createComponent(ItemManagerComponent);
    component = fixture.componentInstance;
    pipe = new FilterPipe();
    fixture.detectChanges();
  }));

  beforeEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
