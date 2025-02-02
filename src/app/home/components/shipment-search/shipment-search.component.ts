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
    let data: any = await this.dataSvc.getShipmentList();

    console.log(data);
    if (Object.keys(this.formData).length) {
      data = this.applyFilter(data['shipmentList']['Shipments']['Shipment']);
    } else if (Object.keys(data).length) {
      data = data['shipmentList']['Shipments']['Shipment'];
    }

    await this.dataSvc.setData(data);
    if (data.length === 1) {
      let _data = await this.dataSvc.getShipment(data[0].AssignedToUserId);
      this.dataSvc.setShipmentData(_data);
      this.router.navigate(['shipment/view']);
    } else {
      this.router.navigate(['shipment/result']);
    }
  }
  applyFilter(data: any) {
    let _data = data.filter((shipment: any) => {
      let isMatch = true;

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
  onReset() {
    this.formData = {
      OrderNo: '',
      ShipmentNo: '',
      BillToAddress: {
        FirstName: '',
        LastName: '',
        EMailID: '',
        DayPhone: '',
      },
    };
  }
}
