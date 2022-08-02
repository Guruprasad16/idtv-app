import { Component, OnInit } from '@angular/core';
import { IdtvnewsapiService } from '../service/idtvnewsapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css'],
})
export class ScienceComponent implements OnInit {
  constructor(private api: IdtvnewsapiService) {}

  //sciencenews data
  scienceNewsData: any = [];
  ngOnInit(): void {
    this.api.tcScience().subscribe((result) => {
      console.log(result);
      this.scienceNewsData = result.data;
    });
  }
}
