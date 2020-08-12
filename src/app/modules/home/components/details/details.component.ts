import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DateValidator } from '../../../../shared/date-validator.validator';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  acceptPolicy;
  detailsForm: FormGroup;
  formSubmitted = false;
  showMinor = false;
  minDate = { year: 1920, month: 1, day: 1 };
  age = 0;
  incomes = [
    { label: '1-5', value: '1-5' },
    { label: '5-10', value: '5-10' },
    { label: '10-15', value: '10-15' },
    { label: '15-20', value: '15-20' },
  ];
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      name: ['Rajesh Wadhwa', [Validators.required]],
      birthdate: ['', Validators.compose([Validators.required, DateValidator.dateValidator])],
      income: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailId: new FormControl('rajesh.wadhwa@gmail.com', [Validators.required, Validators.email]) 
    });
  }

  assignDropdownVal(field, val) {
    this.detailsForm.controls[field].setValue(val);
  }

  ageCalc() {
    const birthdate = this.detailsForm.get('birthdate').value;
    const DOB = new Date(birthdate.year, birthdate.month, birthdate.day);
    const timeDiff = Math.abs(Date.now() - DOB.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    this.showMinor = this.age < 18;
    return this.age;
  }

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  goToDetailsTwo() {
    this.formSubmitted = true;
    if(this.acceptPolicy) {
      this.router.navigate(['details-two']);
    }
  }

}
