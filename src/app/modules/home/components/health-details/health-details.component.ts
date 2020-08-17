import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-health-details',
  templateUrl: './health-details.component.html',
  styleUrls: ['./health-details.component.css']
})
export class HealthDetailsComponent implements OnInit {

  @ViewChild('healthTabRef', { static: true }) healthTabRef: NgbTabset;
  destTab: number;
  aadhaarVerified = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.destTab = +params['destTab'] || 0;
      if (this.destTab) {
        this.healthTabRef.activeId = "3";
      }
      this.aadhaarVerified = params['aadhaarVerified'];
    });
  }

  completed(e) {                                        
      return this.healthTabRef.activeId > e;                                                  
  }

  toNumber(str) {
    return parseInt(str, 10);
  }

}
