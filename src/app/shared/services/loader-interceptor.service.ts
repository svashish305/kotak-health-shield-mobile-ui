import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptorService implements HttpInterceptor {
  requestCount = 0;
  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // tslint:disable-next-line:no-duplicate-string
    if (req.urlWithParams.indexOf('hideLoader=true') === -1) {
      this.showLoader();
      this.requestCount++;
    }

    return next.handle(req).pipe(finalize(() => {
      if (req.urlWithParams.indexOf('hideLoader=true') === -1 && this.requestCount > 0) {
        this.requestCount--;
        if (this.requestCount === 0) {
          this.onEnd();
        }
      }
    }));
  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    this.loaderService.showLoader();
  }

  private hideLoader(): void {
    this.loaderService.hideLoader();
  }
}
