import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteModalComponent } from './favourite-modal.component';

describe('FavouriteModalComponent', () => {
  let component: FavouriteModalComponent;
  let fixture: ComponentFixture<FavouriteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
