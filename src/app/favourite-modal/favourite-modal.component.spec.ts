import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteModalComponent } from './favourite-modal.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';

describe('FavouriteModalComponent', () => {
  let component: FavouriteModalComponent;
  let fixture: ComponentFixture<FavouriteModalComponent>;
  let pipe: FilterPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteModalComponent, FilterPipe ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(FavouriteModalComponent);
    pipe  = new FilterPipe()
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
