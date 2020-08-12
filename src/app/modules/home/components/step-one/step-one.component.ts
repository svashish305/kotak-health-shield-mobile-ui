import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  @Input() healthTabRef;
  formSubmitted = false;
  personalDetailsForm: FormGroup;
  resiStatuses = [
    { label: 'Resident Individual', value: 'Resident Individual' },
    { label: 'Non-Ordinarily Resident', value: 'Non-Ordinarily Resident' },
    { label: 'Non-Resident', value: 'Non-Resident' },
  ];
  maritalStatuses = [
    { label: 'Unmarried', value: 'Unmarried' },
    { label: 'Married', value: 'Married' },
    { label: 'Divorced', value: 'Divorced' },
    { label: 'Widow', value: 'Widow' }
  ];
  eduStatuses = [
    { label: `Associate's Degree`, value: 'Associate' },
    { label: `Bachelor's Degree`, value: `Bachelor's` },
    { label: `Master's Degree`, value: `Master's` },
    { label: 'Doctorate Degree', value: 'Doctorate' }
  ];
  occuStatuses = [
    { label: 'Unemployed', value: 'Unemployed' },
    { label: 'Salaried (Public)', value: 'Salaried (Public)' },
    { label: 'Salaried (Private)', value: 'Salaried (Private)' },
    { label: 'Own Business', value: 'Own Business' }
  ];

  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.personalDetailsForm = this.fb.group({
      residentialStatus: ['Resident Individual', Validators.required],
      currentPin: ['400 607', Validators.required],
      mothersName: ['Sushmita', Validators.required],
      maritalStatus: ['Married', Validators.required],
      education: [`Bachelor's Degree`, Validators.required],
      occupation: [`Salaried (Private)`, Validators.required],
      panNo: ['AWPRGH9378', Validators.required]
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
