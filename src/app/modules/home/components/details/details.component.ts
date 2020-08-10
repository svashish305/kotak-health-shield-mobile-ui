import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DateValidator } from '../../../../shared/date-validator.validator';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailsForm: FormGroup;
  formSubmitted = false;
  showMinor = false;
  minDate = { year: 1920, month: 1, day: 1 };
  age = 0;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      name: ['Rajesh Wadhwa', [Validators.required]],
      birthdate: ['', Validators.compose([Validators.required, DateValidator.dateValidator])],
      mobileNo: ['', Validators.required],
      emailId: new FormControl('rajesh.wadhwa@gmail.com', [Validators.required, Validators.email]) 
    });
  }

  ageCalc() {
    const birthdate = this.detailsForm.get('birthdate').value;
    const DOB = new Date(birthdate.year, birthdate.month, birthdate.day);
    const timeDiff = Math.abs(Date.now() - DOB.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    this.showMinor = this.age < 18;
    return this.age;
  }

  goToDetailsTwo() {
    this.formSubmitted = true;
  }

}
