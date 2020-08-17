import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {
  @Input() healthTabRef;
  formSubmitted = false;
  paymentForm: FormGroup;
  
  constructor(private fb: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      accountNo: ['002993884875777', Validators.required],
      ifscCode: ['KKB09457571', Validators.required]
    });
  }

  navigateBack() {
    // this.healthTabRef.select('3');
    this.location.back();
  }

  navigate() {
    this.formSubmitted = true;
    this.healthTabRef.select('5');
  }

}
