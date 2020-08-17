import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {
  @Input() healthTabRef;
  formSubmitted = false;
  paymentForm: FormGroup;
  opened = false;
  closeResult: string;
  
  constructor(
    private fb: FormBuilder, 
    private location: Location, 
    private modalService: NgbModal, 
  ) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      accountNo: ['002993884875777', Validators.required],
      ifscCode: ['KKB09457571', Validators.required]
    });
  }

  navigateBack() {
    this.location.back();
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
      }, 1000);
    });
  }

  openConditions(content) {
    if (!this.opened) {
      this.opened = true;
      this.open(content);
    }
  }

  navigate() {
    this.formSubmitted = true;
    this.healthTabRef.select('5');
  }

}
