import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  @Input() healthTabRef;
  formSubmitted = false;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.location.back();
  }

  navigate() {
    this.formSubmitted = true;
    this.healthTabRef.select('2');
  }

}
