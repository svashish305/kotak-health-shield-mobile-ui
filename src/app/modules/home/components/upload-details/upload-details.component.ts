import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.css']
})
export class UploadDetailsComponent implements OnInit {
  addressProofs = [
    {label: 'Voter ID Card', value: 'voter-id-card'},
    {label: 'Driving License', value: 'dl'},
  ];

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.location.back();
  }

  navigate() {
    this.router.navigate(['congrats-page']);
  }

}
