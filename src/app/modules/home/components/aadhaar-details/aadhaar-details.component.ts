import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aadhaar-details',
  templateUrl: './aadhaar-details.component.html',
  styleUrls: ['./aadhaar-details.component.css']
})
export class AadhaarDetailsComponent implements OnInit {

  aadhaarForm: FormGroup;
  authorize = false;
  otpGenerated = false;
  otpForm: FormGroup;
  formSubmitted = false;

  constructor(private location: Location, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.aadhaarForm = this.fb.group({
      aadhaarNo: ['', Validators.required],
      authorize: ['', Validators.required],
    });

    this.otpForm = this.fb.group({
      otp: new FormControl('400607', [Validators.required, Validators.pattern('[0-9]{6}')]),
    });
  }

  generateOTP() {
    this.otpGenerated = true;
  }

  resendOtp() {
    
  }

  navigateBack() {
    this.location.back();
  }

  navigate() {
    
  }
}
