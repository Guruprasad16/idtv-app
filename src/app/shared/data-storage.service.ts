import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}

  storeData() {
    const newsdata = {
      author: 'Jack Pickell',
      title: 'Here’s what to expect from Friday’s weather forecast',
      description:
        'Cloudy and mild.The post Here&#8217;s what to expect from Friday&#8217;s weather forecast appeared first on Boston.com.',
      url: 'https://www.boston.com/weather/weather/2022/05/05/heres-what-to-expect-from-fridays-weather-forecast-110/',
      source: 'boston',
      image:
        'https://www.boston.com/wp-content/themes/bdc-2020/images/tease-defaults/fallback-tease-image-4x3-medium.png',
      category: 'general',
      language: 'en',
      country: 'us',
      published_at: '2022-05-05T20:26:08+00:00',
    };
    this.http
      .put(
        'https://idtv-app-default-rtdb.firebaseio.com/newsdata.json',
        newsdata
      )
      .subscribe((result) => {
        console.log(result);
      });
  }
}
