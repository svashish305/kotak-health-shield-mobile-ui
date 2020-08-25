import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsTwoComponent } from './components/details-two/details-two.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent, },
  { path: 'details', component: DetailsComponent, },
  { path: 'details-two', component: DetailsTwoComponent, },
  { path: '**', redirectTo: '/landing' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
