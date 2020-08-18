import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsTwoComponent } from './components/details-two/details-two.component';
import { HealthDetailsComponent } from './components/health-details/health-details.component';
import { AadhaarDetailsComponent } from './components/aadhaar-details/aadhaar-details.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent, },
  { path: 'details', component: DetailsComponent, },
  { path: 'details-two', component: DetailsTwoComponent, },
  { path: 'health-details', component: HealthDetailsComponent, },
  { path: 'aadhaar-details', component: AadhaarDetailsComponent },
  { path: 'review-details', component: ReviewDetailsComponent },
  { path: 'payment-details', component: PaymentDetailsComponent },
  { path: '**', redirectTo: '/landing' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
