import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DateValidator } from 'src/app/shared/date-validator.validator';

@Component({
  selector: 'app-details-two',
  templateUrl: './details-two.component.html',
  styleUrls: ['./details-two.component.css']
})
export class DetailsTwoComponent implements OnInit {

  detailsTwoForm: FormGroup;
  formSubmitted = false;
  opened = false;
  closeResult: string;
  spouseDetailsForm: FormGroup;
  spouse = false;
  minDate = { year: 1920, month: 1, day: 1 };
  showMinor = false;
  age = 0;
  incomes = [
    { label: '0-2', value: '0-2' },
    { label: '3-5', value: '3-5' },
    { label: '5-10', value: '5-10' },
    { label: '10-15', value: '10-15' },
    { label: '15-20', value: '15-20' },
  ];
  shields = [
    {
      id: 1,
      title: 'Cancer Shield',
      desc: 'Average cost of cancer can go upto 20 lacs',
      duration: 10,
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

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router, 
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.detailsTwoForm = this.fb.group({
      policyDuration: ['', Validators.required],
      shieldTypeDuration: ['', Validators.required],
    });

    this.spouseDetailsForm = this.fb.group({
      name: ['Reshma Wadhwa', [Validators.required]],
      birthdate: ['', Validators.compose([Validators.required, DateValidator.dateValidator])],
      income: ['', Validators.required],
    });

    this.spouse = this.router.url.includes('spouse');
  }

  dec(shieldId) {
    let index = this.shields.findIndex(s => s.id == shieldId);
    if(shieldId == 1) {
      if(this.shields[index].duration > 10) {
        this.shields[index].duration -= 1;
      }  
    } else {
      if(this.shields[index].duration > 0) {
        this.shields[index].duration -= 1;
      }
    }
  }

  inc(shieldId) {
    let index = this.shields.findIndex(s => s.id == shieldId);
    this.shields[index].duration += 1;
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

  openConditions(content) {
    if (!this.opened) {
      this.opened = true;
      this.open(content);
    }
  }

  ageCalc() {
    const birthdate = this.spouseDetailsForm.get('birthdate').value;
    const DOB = new Date(birthdate.year, birthdate.month, birthdate.day);
    const timeDiff = Math.abs(Date.now() - DOB.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    this.showMinor = this.age < 18;
    return this.age;
  }

  selfOnly() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  selectSpouse() {
    this.router.navigate(['./spouse'], {relativeTo: this.route});
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
    if(!this.spouse) {
      this.router.navigate(['health-details']);
    } else {
      this.router.navigate(['health-details/spouse']);
    }
  }

}
