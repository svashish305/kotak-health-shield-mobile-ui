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
  annualValues = ["Annually", "Monthly"];
  annual = this.annualValues[0];
  totalAmount = "₹ 28,587";
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.discountForm = this.fb.group({
      relationshipType: [''],
      empNo: ['']
    });
  }

  changeAnnual(val: string) {
    this.annual = val;
    if (val === "Annually") {
      this.totalAmount = "₹ 28,587";
    } else if (val === "Monthly") {
      this.totalAmount = "₹ 2,000";
    }
  }

  navigateBack() {
    this.healthTabRef.select('4');
  }

  navigate() {
    this.formSubmitted = true;
    // navigate next screen
  }

}
