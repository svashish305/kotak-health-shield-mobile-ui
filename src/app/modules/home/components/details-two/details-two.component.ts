import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-two',
  templateUrl: './details-two.component.html',
  styleUrls: ['./details-two.component.css']
})
export class DetailsTwoComponent implements OnInit {

  detailsTwoForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.detailsTwoForm = this.fb.group({
      policyDuration: ['', Validators.required],
    });
  }

  goToStepOne() {

  }

}
