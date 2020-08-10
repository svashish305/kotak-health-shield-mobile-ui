import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent } from '../../shared/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DetailsComponent } from './components/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsTwoComponent } from './components/details-two/details-two.component';

@NgModule({
  declarations: [
    FooterComponent,
    LandingPageComponent,
    DetailsComponent,
    DetailsTwoComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ScrollingModule,
    NgbModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    BsDropdownModule.forRoot(),
  ]
})
export class HomeModule { }
