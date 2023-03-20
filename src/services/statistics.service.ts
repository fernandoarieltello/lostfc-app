import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  getTable(){
    return this.http.get('https://us-central1-lostfc-f992f.cloudfunctions.net/app/api/stat/table').pipe(
      map( data => {
        console.log("map table data", data)
        return Object(data).results
      } )
    )
  }

  getStrike(){
    return this.http.get('https://us-central1-lostfc-f992f.cloudfunctions.net/app/api/stat/shooter').pipe(
      map( data => {
        console.log("map shooter data", data)
        return Object(data).results
      } )
    )
  }
}
