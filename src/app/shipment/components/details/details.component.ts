import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass'],
})
export class DetailsComponent implements OnInit {
  public isCollapsed = true;
  active = 1;
  public data: any;
  public previousUrl: any;
  constructor(
    private router: Router,
    private dataSvc: DataService,
    private _location: Location
  ) {}

  ngOnInit() {
    this.data = this.dataSvc.getShipmentData();
  }
  backToPreviousPage() {
    this._location.back();
  }
  backToSearchPage() {
    this.router.navigate(['home']);
  }
}
