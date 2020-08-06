import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  public lottieConfig;
  private anim: any;
  private animationSpeed = 100;
  showLoader = false;
  subscription: Subscription;

  constructor(private loaderService: LoaderService) {
    this.lottieConfig = {
      path: 'assets/animation/loader.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }


  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.showLoader = state.showLoader;
      });
  }
}


export interface LoaderState {
  showLoader: boolean;
}
