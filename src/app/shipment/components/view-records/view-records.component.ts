import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-view-records',
  templateUrl: './view-records.component.html',
  styleUrls: ['./view-records.component.sass'],
})
export class ViewRecordsComponent {
  @Input() data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataSvc: DataService
  ) {}

  async onItemClick(itemID: any) {
    console.log(itemID);
    let data = await this.dataSvc.getShipment(itemID);
    console.log(data);
    this.dataSvc.setShipmentData(data);
    this.router.navigate(['shipment/view']);
  }
}
