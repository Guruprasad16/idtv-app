import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: TopheadlineComponent },
  { path: 'tech', component: TechComponent },
  { path: 'buss', component: BusinessComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'health', component: HealthComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
