import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.css']
})
export class StepFiveComponent implements OnInit {
  @Input() healthTabRef;
  formSubmitted = false;
  discountAvailed = false;
  discountForm: FormGroup;
  relationshipTypes = [
    {select: 'Kotak Group Employee', value: 'KGE'}
  ];
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.discountForm = this.fb.group({
      relationshipType: [''],
      empNo: ['']
    });
  }

  navigateBack() {
    this.healthTabRef.select('4');
  }

  navigate() {
    this.formSubmitted = true;
    // navigate next screen
  }

}
