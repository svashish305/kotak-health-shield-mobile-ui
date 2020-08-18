import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent } from '../../shared/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DetailsComponent } from './components/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsTwoComponent } from './components/details-two/details-two.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { HealthDetailsComponent } from './components/health-details/health-details.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepFourComponent } from './components/step-four/step-four.component';
import { StepFiveComponent } from './components/step-five/step-five.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { AadhaarDetailsComponent } from './components/aadhaar-details/aadhaar-details.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    DetailsComponent,
    DetailsTwoComponent,
    HealthDetailsComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent,
    AadhaarDetailsComponent,
    ReviewDetailsComponent,
    PaymentDetailsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ScrollingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    BsDropdownModule.forRoot(),
  ]
})
export class HomeModule { }
