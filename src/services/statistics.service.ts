import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) {

   }

  getTable(){
    return this.http.get('https://us-central1-lostfc-f992f.cloudfunctions.net/app/api/stat/table').pipe(
      map( data => {
        console.log("[MAP] data", data)
        return Object(data).results 
      } )
    )
  }

  getStriker(){
     return this.http.get('https://us-central1-lostfc-f992f.cloudfunctions.net/app/api/stat/shooter').pipe(
       map( data => {
         console.log("DATA MAP", data)
          return Object(data).results }))
  }

}
