import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { OrderModule } from 'ngx-order-pipe';
import { SortPipe } from './shared/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemManagerComponent,
    ItemComponent,
    HeaderComponent,
    FavouriteModalComponent,
    ItemSmallComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    InfiniteScrollModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
