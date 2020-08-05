import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { take, finalize, map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Item } from '../models/item.model';
@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(
    private http: HttpClient,
    ) {}

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error("An error occurred:", error.error.message);
      } else {
        // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` + `body was: ${error.error}`
        );
      }
      // return an observable with a user-facing error message
      return throwError(error);
    }
  
    public getListOfGroup(): Observable<Item[]> {
      // Call the http GET
      return this.http.get<Item[]>(environment.remoteServiceUrl).pipe(
        map((res) => {
          const items: Item[] = [];
          // Array.from(res).forEach(elem => items.push(elem));
          for (const itm in res) {
            if (Object.prototype.hasOwnProperty.call(res, itm)) {
              const elem = res[itm];
              items.push(elem)
            }
          }
          console.log(JSON.stringify(items))
          return items;
        }),
        catchError(this.handleError)
      );
  }
}
