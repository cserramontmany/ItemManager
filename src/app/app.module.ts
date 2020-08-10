import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemManagerComponent } from './item-manager/item-manager.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { FavouriteModalComponent } from './favourite-modal/favourite-modal.component';
import { ItemSmallComponent } from './favourite-modal/item-small/item-small.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

import { OrderPipe } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemManagerComponent,
    ItemComponent,
    HeaderComponent,
    FavouriteModalComponent,
    ItemSmallComponent,
    FilterPipe,
    OrderPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    InfiniteScrollModule,
  ],
  providers: [HttpClientModule ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
