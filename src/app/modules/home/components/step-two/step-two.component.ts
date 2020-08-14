import { Component, OnInit, Input, ChangeDetectorRef, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit, AfterViewChecked {
  @Input() healthTabRef;
  firstFormSubmitted = false;
  formSubmitted = false;
  criticalIllnessForm: FormGroup;
  covidQAndAForm: FormGroup;
  personalHealthDetailsForm: FormGroup;
  livoShieldForm: FormGroup;
  opened = false;
  closeResult: string;
  symptomState = [];
  symptoms = [
    {id: 1, title: 'Fever'},
    {id: 2, title: 'Cough or sore throat'},
    {id: 3, title: 'Shortness of breath/ Difficulty in breathing'},
    {id: 4, title: 'Malaise (discomfort or uneasiness due to illness/ flu-like tiredness)'},
    {id: 5, title: 'Rhinorrhoea (mucus discharge from the nose)'},
    {id: 6, title: 'Gastro-intestinal symptoms (nausea/ vomiting/ diarrhoea)'},
    {id: 7, title: 'None of the above'},
  ]
  minDate = { year: 1920, month: 1, day: 1 };
  covidTested = false;
  updatePlanTrigerred = false;
  cardiacShieldDuration = 15;

  constructor(
    private fb: FormBuilder, 
    private modalService: NgbModal, 
    private chRef: ChangeDetectorRef
  ) { 
    for(let i=0; i<7; i++) {
      this.symptomState[i] = false;
    }
  }

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
      countriesTravelled: ['Italy, France'],
      citiesTravelled: ['Venice, Rome, Florence, Naples, Pa...'],
      depDate: ['DD/MM/YYYY'],
      arrDate: ['DD/MM/YYYY'],
      purposeOfTravel: ['Vacation'],
      willTravel: ['No'],
      quarantined: ['No'],
      quarantineDate: ['DD/MM/YYYY'],
      reasonOfQuarantine: ['Travel history'],
      covidPositive: ['No']
    });

    this.livoShieldForm = this.fb.group({
      livoHospitalized: ['No'],
      bloodIssue: ['No'],
      mri: ['No'],
      surgery: ['No']
    });
  }

  ngAfterViewChecked() {
    if(this.symptomState[7]) {
      for(let i=1; i<=6; i++) {
        if(this.symptomState[i]) {
          this.symptomState[i] = false;
        }
      }
    }
    this.chRef.detectChanges();
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

  updatePlan() {
    this.updatePlanTrigerred = true;
  }

  dec() {
    if(this.cardiacShieldDuration > 0) {
      this.cardiacShieldDuration -= 1;
    }
  }

  inc() {
    this.cardiacShieldDuration += 1;
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
