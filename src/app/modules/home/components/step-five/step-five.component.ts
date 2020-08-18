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
  benefits = [
    { title: 'Waiver of premium', desc: 'All future premiums waived off if suffering from any condition defined below.', annualCost: '₹ 358' },
    { title: 'Income benefit', desc: 'Get an in @1% of sum ass p.m for a year in case of xyz', annualCost: '₹ 413' }
  ];
  addRemoveText = '+ Add';
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

  toggleBenefitBtnText() {
    if(this.addRemoveText === '+ Add') {
      this.addRemoveText = 'Remove';
    } else if (this.addRemoveText === 'Remove') {
      this.addRemoveText = '+ Add';
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
