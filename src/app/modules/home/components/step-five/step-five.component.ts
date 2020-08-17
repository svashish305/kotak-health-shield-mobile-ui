import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.css']
})
export class StepFiveComponent implements OnInit {
  @Input() healthTabRef;
  formSubmitted = false;
  discountAvailed = false;
  relationshipTypes = [
    {select: 'Kotak Group Employee', value: 'KGE'}
  ];
  
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
