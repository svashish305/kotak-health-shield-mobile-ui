import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsTwoComponent } from './components/details-two/details-two.component';
import { HealthDetailsComponent } from './components/health-details/health-details.component';
import { AadhaarDetailsComponent } from './components/aadhaar-details/aadhaar-details.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';
import { CongratsPageComponent } from './components/congrats-page/congrats-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent, },
  { path: 'details', component: DetailsComponent, },
  { path: 'details-two', component: DetailsTwoComponent, },
  { path: 'health-details', component: HealthDetailsComponent, },
  { path: 'aadhaar-details', component: AadhaarDetailsComponent },
  { path: 'review-details', component: ReviewDetailsComponent },
  { path: 'payment-details', component: PaymentDetailsComponent },
  { path: 'upload-details', component: UploadDetailsComponent },
  { path: 'congrats-page', component: CongratsPageComponent },

  { path: 'details-two/spouse', component: DetailsTwoComponent, },
  { path: 'health-details/spouse', component: HealthDetailsComponent, },
  { path: 'aadhaar-details/spouse', component: AadhaarDetailsComponent },
  { path: 'review-details/spouse', component: ReviewDetailsComponent },
  { path: 'payment-details/spouse', component: PaymentDetailsComponent },
  { path: 'upload-details/spouse', component: UploadDetailsComponent },
  { path: 'congrats-page/spouse', component: CongratsPageComponent },
  { path: '**', redirectTo: '/landing' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
