import { Component, OnInit } from '@angular/core';
import { IdtvnewsapiService } from '../service/idtvnewsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css'],
})
export class TopheadlineComponent implements OnInit {
  constructor(private api: IdtvnewsapiService) {}

  //display headline data
  topHeadlinesData:any = [];
  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result)=>{
      console.log(result);
      this.topHeadlinesData = result.data;
    })
  }
}
