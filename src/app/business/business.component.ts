import { Component, OnInit } from '@angular/core';
import { IdtvnewsapiService } from '../service/idtvnewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {
  constructor(private api: IdtvnewsapiService) {}

  //businessnews data
  businessNewsData: any = [];
  ngOnInit(): void {
    this.api.tcBuss().subscribe((result) => {
      console.log(result);
      this.businessNewsData = result.data;
    });
  }
}
