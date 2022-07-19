import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { HttpClientModule } from '@angular/common/http';
import { IdtvnewsapiService } from './service/idtvnewsapi.service';
import { TechComponent } from './tech/tech.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [IdtvnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
