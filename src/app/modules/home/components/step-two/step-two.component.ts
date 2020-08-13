import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  @Input() healthTabRef;
  firstFormSubmitted = false;
  formSubmitted = false;
  criticalIllnessForm: FormGroup;
  covidQAndAForm: FormGroup;
  personalHealthDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criticalIllnessForm = this.fb.group({
      ciCover: ['No'],
      ciClaim: ['No'],
      ciDeclined: ['No'],
      insuranceUpdated: ['No']
    });

    this.covidQAndAForm = this.fb.group({
      goodHealth: ['No'],
      symptoms: ['No'],
      travelledAbroad: ['No'],
      willTravel: ['No'],
      quarantined: ['No'],
      covidPositive: ['No']
    });
  }

  navigateBack() {
    if(!this.firstFormSubmitted) {
      this.healthTabRef.select('1');
    } else {
      this.firstFormSubmitted = false;
    }
  }

  navigate() {
    if(!this.firstFormSubmitted) {
      this.firstFormSubmitted = true;
      this.formSubmitted = false;
    } else {
      this.formSubmitted = true;
      this.healthTabRef.select('3');
    }
  }

}
