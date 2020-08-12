import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {
  @Input() healthTabRef;
  formSubmitted = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.healthTabRef.select('3');
  }

  navigate() {
    this.formSubmitted = true;
    this.healthTabRef.select('5');
  }

}
