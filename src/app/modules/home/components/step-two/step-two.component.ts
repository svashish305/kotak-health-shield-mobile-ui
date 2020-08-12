import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  @Input() healthTabRef;
  formSubmitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.healthTabRef.select('1');
  }

  navigate() {
    this.formSubmitted = true;
    this.healthTabRef.select('3');
  }

}
