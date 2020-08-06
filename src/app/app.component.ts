import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { LoaderService } from './shared/services/loader.service';
import { LoaderState } from './shared/loader/loader.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kotak-shield-ui';
  showLoader = true;
  subscription: Subscription;

  constructor(
    private router: Router,
    private loaderService: LoaderService) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.showLoader = state.showLoader;
      });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      // this.loading = true;
      this.loaderService.showLoader();
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => { // here
        this.loaderService.hideLoader();
      }, 2000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => { // here
        this.loaderService.hideLoader();
      }, 2000);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => { // here
        this.loaderService.hideLoader();
      }, 2000);
    }
  }
}
