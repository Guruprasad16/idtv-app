import { Component, OnInit } from '@angular/core';
import { IdtvnewsapiService } from '../service/idtvnewsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
})
export class TechComponent implements OnInit {
  constructor(private api: IdtvnewsapiService) {}

  //technews data
  techNewsData: any = [];
  ngOnInit(): void {
    this.api.tcTech().subscribe((result) => {
      console.log(result);
      this.techNewsData = result.data;
    });
  }
}
