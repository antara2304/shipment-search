import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-shipment-search',
  templateUrl: './shipment-search.component.html',
  styleUrls: ['./shipment-search.component.sass'],
})
export class ShipmentSearchComponent {
  constructor(
    private dataSvc: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  openModal(value: any) {}

  async onSearch() {
    const data = await this.dataSvc.getShipmentList();
    console.log(data);
    if (Object.keys(data).length) {
      await this.dataSvc.setData(data['shipmentList']['Shipments']['Shipment']);
      console.log('inside the method');
      this.router.navigate(['shipment/result']);
    }
  }
}
