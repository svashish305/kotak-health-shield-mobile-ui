import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.residenceDetailsForm = this.fb.group({
      
    });
  }

  navigateBack() {
    this.healthTabRef.select('2');
  }

  navigate() {
    this.formSubmitted = true;
    this.healthTabRef.select('4');
  }

}
