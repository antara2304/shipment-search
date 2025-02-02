import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-shipment-search',
  templateUrl: './shipment-search.component.html',
  styleUrls: ['./shipment-search.component.sass'],
})
export class ShipmentSearchComponent {
  formData: any = {
    OrderNo: '',
    ShipmentNo: '',
    BillToAddress: {
      FirstName: '',
      LastName: '',
      EMailID: '',
      DayPhone: '',
    },
  };
  constructor(
    private dataSvc: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  openModal(value: any) {}

  async onSearch() {
    console.log(this.formData);
    let data = await this.dataSvc.getShipmentList();

    console.log(data);
    if (Object.keys(this.formData).length) {
      data = this.applyFilter(data['shipmentList']['Shipments']['Shipment']);
      await this.dataSvc.setData(data);
      this.router.navigate(['shipment/result']);
    } else if (Object.keys(data).length) {
      await this.dataSvc.setData(data['shipmentList']['Shipments']['Shipment']);
      this.router.navigate(['shipment/result']);
    }
  }
  applyFilter(data: any) {
    let _data = data.filter((shipment: any) => {
      let isMatch = true;

      // Filter based on the form fields (including nested BillToAddress)
      if (
        this.formData.OrderNo &&
        !shipment.OrderNo.toLowerCase().includes(
          this.formData.OrderNo.toLowerCase()
        )
      ) {
        isMatch = false;
      }

      if (
        this.formData.ShipmentNo &&
        !shipment.ShipmentNo.toLowerCase().includes(
          this.formData.ShipmentNo.toLowerCase()
        )
      ) {
        isMatch = false;
      }

      if (
        this.formData.BillToAddress.FirstName &&
        !shipment.BillToAddress.FirstName.toLowerCase().includes(
          this.formData.BillToAddress.FirstName.toLowerCase()
        )
      ) {
        isMatch = false;
      }

      if (
        this.formData.BillToAddress.LastName &&
        !shipment.BillToAddress.LastName.toLowerCase().includes(
          this.formData.BillToAddress.LastName.toLowerCase()
        )
      ) {
        isMatch = false;
      }

      if (
        this.formData.BillToAddress.EMailID &&
        !shipment.BillToAddress.EMailID.toLowerCase().includes(
          this.formData.BillToAddress.EMailID.toLowerCase()
        )
      ) {
        isMatch = false;
      }

      if (
        this.formData.BillToAddress.DayPhone &&
        !shipment.BillToAddress.DayPhone.toLowerCase().includes(
          this.formData.BillToAddress.DayPhone.toLowerCase()
        )
      ) {
        isMatch = false;
      }

      return isMatch;
    });
    console.log(_data);
    return _data;
  }
}
