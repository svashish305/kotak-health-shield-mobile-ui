import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();

  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  showLoader() {
    this.loaderSubject.next({ showLoader: true } as LoaderState);
  }

  hideLoader() {
    this.loaderSubject.next({ showLoader: false } as LoaderState);
  }
}

export interface LoaderState {
  showLoader: boolean;
}
