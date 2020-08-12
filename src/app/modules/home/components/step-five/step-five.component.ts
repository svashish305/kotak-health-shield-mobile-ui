import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.css']
})
export class StepFiveComponent implements OnInit {
  @Input() healthTabRef;
  formSubmitted = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.healthTabRef.select('4');
  }

  navigate() {
    this.formSubmitted = true;
    // navigate next screen
  }

}
