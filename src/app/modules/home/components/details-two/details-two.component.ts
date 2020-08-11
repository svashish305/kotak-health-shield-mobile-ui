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
  shields = [
    {
      id: 1,
      title: 'Cancer Shield',
      desc: 'Average cost of cancer can go upto 20 lacs',
      duration: 0,
      perDayCharge: 5
    },
    {
      id: 2,
      title: 'Cardiac Shield',
      desc: '4 out of 10 people face cardiac issues',
      duration: 0,
      perDayCharge: 5
    },
    {
      id: 3,
      title: 'Livo Shield',
      desc: 'End stage liver disease can cause death',
      duration: 0,
      perDayCharge: 7
    },
    {
      id: 4,
      title: 'Neuro Shield',
      desc: '1 in 6 people living with one or more Neurological condition',
      duration: 0,
      perDayCharge: 7
    }
  ];
  annualValues = ["Annually", "Monthly"];
  annual = this.annualValues[0];
  totalAmount = "₹ 28,587";

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.detailsTwoForm = this.fb.group({
      policyDuration: ['', Validators.required],
      shieldTypeDuration: ['', Validators.required],
    });
  }

  dec(shieldId) {
    let index = this.shields.findIndex(s => s.id == shieldId);
    if(this.shields[index].duration > 0) {
      this.shields[index].duration -= 1;
    }
  }

  inc(shieldId) {
    let index = this.shields.findIndex(s => s.id == shieldId);
    this.shields[index].duration += 1;
  }

  changeAnnual(val: string) {
    this.annual = val;
    if (val === "Annually") {
      this.totalAmount = "₹ 28,587";
    } else if (val === "Monthly") {
      this.totalAmount = "₹ 2,000";
    }
  }

  goToStepOne() {
    this.router.navigate(['health-details']);
  }

}
