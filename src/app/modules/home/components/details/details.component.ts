import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailsForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      name: ['Rajesh Wadhwa', [Validators.required]],
      mobileNo: ['', Validators.required],
      emailId: new FormControl('rajesh.wadhwa@gmail.com', [Validators.required, Validators.email]) 
    });
  }

  goToDetailsTwo() {
    this.formSubmitted = true;
  }

}
