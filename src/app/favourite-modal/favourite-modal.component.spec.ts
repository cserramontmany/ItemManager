import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { FavouriteModalComponent } from './favourite-modal.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { ItemHttpService } from '../shared/services/itemHttp.service';
import { Observable, Observer } from 'rxjs';
import { ItemFavourite } from '../shared/models/item-favourite.model';
import { Item } from '../shared/models/item.model';
import { FavouritesService } from '../shared/services/favourites.service';

describe('FavouriteModalComponent', () => {
  let component: FavouriteModalComponent;
  let fixture: ComponentFixture<FavouriteModalComponent>;
  let pipe: FilterPipe;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [  FormsModule  ],
      declarations: [ FavouriteModalComponent, FilterPipe ]
    })
    await TestBed.compileComponents();
    
    fixture = TestBed.createComponent(FavouriteModalComponent);
    component = fixture.componentInstance;
    
    let favItem = new ItemFavourite(new Item());
    favItem.favourite = true;
    let favService = fixture.debugElement.injector.get(FavouritesService);
    favService.addToFavourites(favItem);
    favService.addToFavourites(favItem);
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('show() => after show should be 2', () => {
    component.show();
    expect(component.items).not.toBe(undefined);
    expect(component.items.length).toBe(2);
  });

    
  it('const filterField => title', () => {
    expect(component.filterField).toEqual('title');
  });

  it('close() => recovery empty list text "oops-text"; should get null ', () => {
    let compiled = fixture.debugElement.nativeElement;
    component.close();
    expect(compiled.querySelector('.oops-text')).toBe(null);
  });
});
