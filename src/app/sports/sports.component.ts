import { Component, OnInit } from '@angular/core';
import { IdtvnewsapiService } from '../service/idtvnewsapi.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent implements OnInit {
  constructor(private api: IdtvnewsapiService,private dataStorage: DataStorageService) {}

  //sportsnews data
  sportsNewsData: any = [];
  ngOnInit(): void {
    this.api.tcSports().subscribe((result) => {
      console.log(result);
      this.sportsNewsData = result.data;
      this.dataStorage.storeData();
    });
  }
}
