import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {

  reviewForm: FormGroup;

  constructor(
    private location: Location, 
    private router: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      
    });
  }

  navigateBack() {
    this.location.back();
  }

  navigate() {

  }

}
