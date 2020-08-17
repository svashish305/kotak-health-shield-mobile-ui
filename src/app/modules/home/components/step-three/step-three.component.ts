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
  secondFormSubmitted = false;
  formSubmitted = false;
  residenceDetailsForm: FormGroup;
  otherDetailsForm: FormGroup;
  nomineeDetailsForm: FormGroup;
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

    this.otherDetailsForm = this.fb.group({
      otherCitizen: ['No'],
      otherTaxResident: ['No'],
      greenCardHolder: ['No'],
      criminalHistory: ['No'],
      politicallyExposed: ['No']
    });

    this.nomineeDetailsForm = this.fb.group({

    });
  }

  enterAadhaarDetails() {
    this.router.navigate(['aadhaar-details']);
  }

  navigateBack() {
    this.healthTabRef.select('2');
  }

  navigate() {
    if(!this.firstFormSubmitted) {
      this.firstFormSubmitted = true;
      this.secondFormSubmitted = false;
      this.formSubmitted = false;
    } else if (this.firstFormSubmitted && !this.secondFormSubmitted) {
      this.secondFormSubmitted = true;
      this.formSubmitted = false;
    } else {
      this.formSubmitted = true;
      this.healthTabRef.select('4');
    }
  }

}
