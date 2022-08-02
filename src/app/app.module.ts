import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { HttpClientModule } from '@angular/common/http';
import { IdtvnewsapiService } from './service/idtvnewsapi.service';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechComponent,
    BusinessComponent,
    SportsComponent,
    HealthComponent,
    EntertainmentComponent,
    ScienceComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    FormsModule
  ],
  providers: [IdtvnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
