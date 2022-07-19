import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdtvnewsapiService {
  constructor(private _http: HttpClient) {}

  //topheadline URL
  topHeadlineNews =
    ' https://api.thenewsapi.com/v1/news/top?api_token=hSBJlB1U5X9f8GNn3JLnnqYfSUFiwu6ly070f8Q0&locale=in&limit=50';
  tcHeadlines(): Observable<any> {
    return this._http.get(this.topHeadlineNews);
  }
}
