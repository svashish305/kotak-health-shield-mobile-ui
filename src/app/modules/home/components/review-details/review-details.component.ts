import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {

  formSubmitted = false;
  reviewForm: FormGroup;
  proposalFormAccepted = false;
  fatcaFormAccepted = false;
  covidDecAccepted = false;
  opened = false;
  closeResult: string;

  constructor(
    private location: Location, 
    private router: Router,
    private modalService: NgbModal, 
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
    });
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

  openConditions(event, content) {
    // if (!this.opened) {
    //   this.opened = true;
    //   this.open(content);
    // }
    if (event.target.checked) {
      this.open(content);
    }
  }

  navigateBack() {
    this.location.back();
  }

  navigate() {
    this.formSubmitted = true;
    this.router.navigate(['payment-details']);
  }

}
