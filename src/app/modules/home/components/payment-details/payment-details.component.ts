import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  
  formSubmitted = false;
  optForStandingIns = false;
  mode1Active = true;
  mode2Active = false;
  tppConsent = false;
  opened = false;
  closeResult: string;

  constructor(
    private location: Location,
    private modalService: NgbModal, 
    private router: Router
  ) { }

  ngOnInit(): void {
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
      setTimeout(() => {
        this.navigate();
      }, 1000)
    });
  }

  navigateBack() {
    this.location.back();
  }

  navigate() {
    this.formSubmitted = true;
    this.router.navigate(['upload-details']);
  }

}
