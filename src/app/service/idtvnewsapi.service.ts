import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdtvnewsapiService {
  constructor(private _http: HttpClient) {}

  //topheadline API URL
  topHeadlineNews =
    ' http://api.mediastack.com/v1/news?access_key=be78bfb5b5687e4d70de1fda3e940436&countries=us&languages=en&limit=100';

  //tech news API URL
  techNews =
    'http://api.mediastack.com/v1/news?access_key=be78bfb5b5687e4d70de1fda3e940436&countries=us&categories=technology&languages=en&limit=100';

  //business news API URL
  businessNews =
    'http://api.mediastack.com/v1/news?access_key=be78bfb5b5687e4d70de1fda3e940436&countries=us&categories=business&languages=en&limit=100';

  //sports news API URL
  sportsNews =
    'http://api.mediastack.com/v1/news?access_key=be78bfb5b5687e4d70de1fda3e940436&countries=us&categories=sports&languages=en&limit=100';

  //health news API URL
  healthNews =
    'http://api.mediastack.com/v1/news?access_key=be78bfb5b5687e4d70de1fda3e940436&countries=us&categories=health&languages=en&limit=100';

  //entertainment news API URL
  entertainmentNews =
    'http://api.mediastack.com/v1/news?access_key=be78bfb5b5687e4d70de1fda3e940436&countries=us&categories=entertainment&languages=en&limit=100';

  //science news API URL
  scienceNews =
    'http://api.mediastack.com/v1/news?access_key=be78bfb5b5687e4d70de1fda3e940436&countries=us&categories=science&languages=en&limit=100';

  tcHeadlines(): Observable<any> {
    return this._http.get(this.topHeadlineNews);
  }

  tcTech(): Observable<any> {
    return this._http.get(this.techNews);
  }

  tcBuss(): Observable<any> {
    return this._http.get(this.businessNews);
  }

  tcSports(): Observable<any> {
    return this._http.get(this.sportsNews);
  }

  tcHealth(): Observable<any> {
    return this._http.get(this.healthNews);
  }

  tcEntertainment(): Observable<any> {
    return this._http.get(this.entertainmentNews);
  }

  tcScience(): Observable<any> {
    return this._http.get(this.scienceNews);
  }
}
