import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { take, finalize, map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
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

  public getItems(): Observable<Item[]> {
    // Call the http GET
    return this.http.get<any>(environment.remoteServiceUrl).pipe(
      map((res) => {
        const items: Item[] = [];
        Array.from(res).forEach(elem => {
          items.push(<Item>elem)
          //console.log(JSON.stringify(<Item>elem.title))
        });
        for (let itm = 0; itm < res.items.length; itm++) {
          const elem = res.items[itm];
          items.push(elem);
        }
        // for (const itm in res) {
        //   if (Object.prototype.hasOwnProperty.call(res, itm)) {
        //     const elem = res.items[itm];
        //     items.push(elem);
        //   }
        // }
        //console.log(JSON.stringify(items));
        return items;
      }),
      catchError(this.handleError)
    );
  }

  // public getItemWithFavouriteOLD(): ItemFavourite[] {
  //   const favs: ItemFavourite[] = [];
  //   this.getItems().subscribe((res) => {
  //     Array.from(res).forEach((elem) => {
  //       let fav = new ItemFavourite();
  //       fav.title = elem.title;
  //       fav.description = elem.description;
  //       fav.price = elem.price;
  //       fav.image = elem.image;
  //       favs.push(fav);
  //     });
  //   });
  //   console.log(JSON.stringify(favs));
  //   return favs;
  // }

  // public getItemWithFavourite(): ItemFavourite[] {
  //   const favs: ItemFavourite[] = [];
  //   this.getItems()
  //     .pipe(map((val) => {
  //       for (const itm in val) {
  //         if (Object.prototype.hasOwnProperty.call(val, itm)) {
  //           const elem:ItemFavourite = <ItemFavourite>val[itm];
  //           favs.push(elem);
  //         }
  //       }
  //     }))
  //     .subscribe();
  //     console.log(JSON.stringify(favs));
  //   return favs;
  // }
}
