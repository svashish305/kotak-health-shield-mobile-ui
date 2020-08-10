import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details-two',
  templateUrl: './details-two.component.html',
  styleUrls: ['./details-two.component.css']
})
export class DetailsTwoComponent implements OnInit {

  detailsTwoForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  goToStepOne() {

  }

}
