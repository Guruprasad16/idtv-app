import { Component, OnInit } from '@angular/core';
import { IdtvnewsapiService } from '../service/idtvnewsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
})
export class HealthComponent implements OnInit {
  constructor(private api: IdtvnewsapiService) {}

  //healthnews data
  healthNewsData: any = [];
  ngOnInit(): void {
    this.api.tcHealth().subscribe((result) => {
      console.log(result);
      this.healthNewsData = result.data;
    });
  }
}
