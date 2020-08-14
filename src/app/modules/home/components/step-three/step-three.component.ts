import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {
  @Input() healthTabRef;
  firstFormSubmitted = false;
  formSubmitted = false;
  residenceDetailsForm: FormGroup;
  isManualEntryCollapsed = false;
  cities: [

  ];
  states: [

  ];
  sameAddress = false;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.residenceDetailsForm = this.fb.group({
      addressLine1: [''],
      addressLine2: [''],
      landmark: [''],
      pincode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6}')]),
      city: [''],
      state: ['']
    });
  }

  enterAadhaarDetails() {

  }

  navigateBack() {
    this.healthTabRef.select('2');
  }

  navigate() {
    this.formSubmitted = true;
    this.healthTabRef.select('4');
  }

}
