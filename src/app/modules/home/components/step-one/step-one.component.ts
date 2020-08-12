import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  @Input() healthTabRef;
  formSubmitted = false;
  personalDetailsForm: FormGroup;

  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.personalDetailsForm = this.fb.group({
      
    });
  }

  navigateBack() {
    this.location.back();
  }

  navigate() {
    this.formSubmitted = true;
    this.healthTabRef.select('2');
  }

}
