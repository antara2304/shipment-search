import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass'],
})
export class DetailsComponent implements OnInit {
  public isCollapsed = true;
  active = 1;
  public data: any;
  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.data = this.dataSvc.getShipmentData();
  }
}
