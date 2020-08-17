import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aadhaar-details',
  templateUrl: './aadhaar-details.component.html',
  styleUrls: ['./aadhaar-details.component.css']
})
export class AadhaarDetailsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.location.back();
  }

  navigate() {
    
  }
}
