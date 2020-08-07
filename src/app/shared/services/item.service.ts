import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { take, finalize, map, catchError, skip } from 'rxjs/operators';
import { Observable, throwError, pipe } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemFavourite } from '../models/item-favourite.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }

  // if i had the control of the api, i would ask for the elements that i want to charge.
  // like using skip and take
  // same with the filter.
  // public getSomeItems(): Observable<ItemFavourite[]> {
  //  return this.getFavItems().pipe( skip(0), take(5))
  // }

  public getFavItems(): Observable<ItemFavourite[]> {
    // Call the http GET
    return this.http.get<any>(environment.remoteServiceUrl)
    .pipe(
      map(res=>{
        let items: Item[]= <Item[]>res.items;
        let favitems:ItemFavourite[] = [];
        items.forEach(elem => {
          favitems.push(this.mapItemToFavouriteItem(elem));
        });
        return favitems;
      }),
      catchError(this.handleError)
    );
  }

  mapItemToFavouriteItem(item: Item): ItemFavourite {
    let favItem = new ItemFavourite(item);
    return favItem;
  }
}
