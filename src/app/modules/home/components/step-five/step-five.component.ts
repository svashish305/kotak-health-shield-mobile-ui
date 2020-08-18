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
  pacAmount = 10;
  hAmounts = [
    { label: '₹ 2,000', value: 2000 },
    { label: '₹ 3,000', value: 3000 },
  ];
  selectedHAmount = '₹ 3,000';
  addRemoveTexts = ['+ Add', '+ Add', '+ Add', '+ Add'];
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

  dec() {
    if(this.pacAmount > 0) {
      this.pacAmount -= 1;
    }
  }

  inc() {
    this.pacAmount += 1;
  }

  toggleBenefitBtnText(index) {
    if(this.addRemoveTexts[index] === '+ Add') {
      this.addRemoveTexts[index] = 'Remove';
    } else if (this.addRemoveTexts[index] === 'Remove') {
      this.addRemoveTexts[index] = '+ Add';
    }
  }

  assignDropdownVal(amount) {
    this.selectedHAmount = amount;
  }

  navigateBack() {
    this.healthTabRef.select('4');
  }

  navigate() {
    this.formSubmitted = true;
    // navigate next screen
  }

}
