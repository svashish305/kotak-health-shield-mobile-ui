import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  @Input() healthTabRef;
  firstFormSubmitted = false;
  formSubmitted = false;
  personalDetailsForm: FormGroup;
  profilePicUploaded = false;
  resiStatuses = [
    { label: 'Resident Individual', value: 'Resident Individual' },
    { label: 'Non-Ordinarily Resident', value: 'Non-Ordinarily Resident' },
    { label: 'Non-Resident', value: 'Non-Resident' },
  ];
  diseaseList = [
    { id: 1, name: 'Heart Disease' },
    { id: 2, name: 'Stroke' },
    { id: 3, name: 'High Blood Pressure' },
    { id: 4, name: 'Diabetes Mellitus' },
    { id: 5, name: 'Cancer' },
    { id: 6, name: 'Kidney Disease' },
    { id: 7, name: 'Paralysis or any other hereditary / familial disorders' },
    { id: 8, name: 'Tuberculosis or any contagious diseases such as Hepatitis, AIDS / HIV' }
  ]
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
  additionalDetailsForm: FormGroup;
  height = '000';
  weight = '00';
  opened = false;
  closeResult: string;

  constructor(private location: Location, private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.personalDetailsForm = this.fb.group({
      residentialStatus: ['Resident Individual', Validators.required],
      currentPin: new FormControl('400 607', [Validators.required, Validators.pattern('[0-9]{6}')]),
      mothersName: ['Sushmita', Validators.required],
      maritalStatus: ['Married', Validators.required],
      education: [`Bachelor's Degree`, Validators.required],
      occupation: [`Salaried (Private)`, Validators.required],
      panNo: ['AWPRGH9378', Validators.required]
    });

    this.additionalDetailsForm = this.fb.group({
      height: [''],
      weight: [''],
      smoker: ['No'],
      tobacco: ['No'],
      alcohol: ['No'],
      narcotics: ['No'],
      hospitalized: ['No'],
      hiv: ['No'],
      familySuffered: ['No']
    });
  }

  pad(num:number, size:number): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  dec(val) {
    if(val === 'height') {
      if(parseInt(this.height) > 0) {
        this.height = this.pad(parseInt(this.height) - 1, 3);
      }
    } else if (val === 'weight') {
      if(parseInt(this.weight) > 0) {
        this.weight = this.pad(parseInt(this.weight) - 1, 2);
      }
    }
  }

  inc(val) {
    if(val === 'height') {
      this.height = this.pad(parseInt(this.height)+1, 3);
    } else if (val === 'weight') {
      this.weight = this.pad(parseInt(this.weight)+1, 2);
    }
  }

  open(content) {
    this.opened = true;
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      backdropClass: 'dark-backdrop'
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openConditions(content) {
    if (!this.opened) {
      this.opened = true;
      this.open(content);
    }
  }

  navigateBack() {
    if(!this.firstFormSubmitted) {
      this.location.back();
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
      this.healthTabRef.select('2');
    }
  }

}
