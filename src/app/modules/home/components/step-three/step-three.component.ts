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
  @Input() aadhaarVerified;
  firstFormSubmitted = false;
  secondFormSubmitted = false;
  formSubmitted = false;
  residenceDetailsForm: FormGroup;
  otherDetailsForm: FormGroup;
  nomineeDetailsForm: FormGroup;
  isManualEntryCollapsed = false;
  cities: ['Hyderabad', 'Bengaluru', 'Chennai', 'Mumbai'];
  states: [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'National Capital Territory of Delhi union territory',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];
  sameAddress = false;
  relationships = [
    { label: 'Father', value: 'FA' },
    { label: 'Son', value: 'SO' },
    { label: 'Brother', value: 'BR' },
    { label: 'Grandfather', value: 'GF' },
    { label: 'Grand son', value: 'GS' },
    { label: 'Daughter', value: 'DA' },
    { label: 'Granddaughter', value: 'GD' },
    { label: 'Grandmother', value: 'GM' },
    { label: 'Sister', value: 'SI' },
    { label: 'Wife', value: 'WI' },
    { label: 'Mother', value: 'MO' },
    { label: 'Husband', value: 'HU' }
  ];
  showMinor = false;
  minDate = { year: 1920, month: 1, day: 1 };
  age = 0;
  showNominees = [];
  multipleNominees = false;
  nomineeCount = 1;
  nomineeAdditionForm: FormGroup;
  sameAadhaarAddress = false;
  aadhaarCurrentAddresssForm: FormGroup;

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

    for(let i=1; i<=5; i++) {
      this.showNominees[i] = true;
    }

    this.nomineeDetailsForm = this.fb.group({
      fullName: ['Dev Wadhwa', Validators.required],
      relationship: ['', Validators.required],
      birthdate: ['', Validators.required],
      sharePercentage: ['50']
    });

    this.nomineeAdditionForm = this.fb.group({
      fullName: ['Rohan Wadhwa', Validators.required],
      relationship: ['', Validators.required],
      birthdate: ['', Validators.required],
      sharePercentage: ['50']
    }); 

    this.aadhaarCurrentAddresssForm = this.fb.group({
      addressLine1: [''],
      addressLine2: [''],
      landmark: [''],
      pincode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6}')]),
      city: [''],
      state: ['']
    });
  }

  enterAadhaarDetails() {
    this.router.navigate(['aadhaar-details']);
  }

  addNominee() {
    this.multipleNominees = true;
    this.nomineeCount += 1;
  }

  getNomineeState(index) {
    return this.showNominees[index];
  }

  deleteNomineeCard(index) {
    if(this.nomineeCount  > 2) {
      this.nomineeCount -= 1;
    }
    this.showNominees[index] = false;
  }

  ageCalc() {
    const birthdate = this.nomineeDetailsForm.get('birthdate').value;
    const DOB = new Date(birthdate.year, birthdate.month, birthdate.day);
    const timeDiff = Math.abs(Date.now() - DOB.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    this.showMinor = this.age < 18;
    return this.age;
  }

  navigateBack() {
    if(!this.firstFormSubmitted && !this.secondFormSubmitted) {
      this.healthTabRef.select('2');
    } else if (this.firstFormSubmitted && !this.secondFormSubmitted) {
      this.firstFormSubmitted = false;
    } else {
      this.secondFormSubmitted = false;
    }
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
