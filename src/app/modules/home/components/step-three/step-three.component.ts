import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {
  @Input() healthTabRef;
  formSubmitted = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.healthTabRef.select('2');
  }

  navigate() {
    this.formSubmitted = true;
    this.healthTabRef.select('4');
  }

}
