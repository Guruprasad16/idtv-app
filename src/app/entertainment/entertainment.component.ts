import { Component, OnInit } from '@angular/core';
import { IdtvnewsapiService } from '../service/idtvnewsapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
})
export class EntertainmentComponent implements OnInit {
  constructor(private api: IdtvnewsapiService) {}

  //entertainmentnews data
  entertainmentNewsData: any = [];
  ngOnInit(): void {
    this.api.tcEntertainment().subscribe((result) => {
      console.log(result);
      this.entertainmentNewsData = result.data;
    });
  }
}
