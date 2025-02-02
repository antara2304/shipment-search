import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private data: any;
  private shipmentData: any;

  async getShipmentList(): Promise<any> {
    return await this.http.get('assets/mock.json').toPromise();
  }

  setData(_data: any) {
    this.data = _data;
  }
  getData() {
    return this.data;
  }

  async getShipment(itemID: any) {
    const data: any = await this.http.get('assets/mock.json').toPromise();
    let result = data['Shipment'].find(
      (item: any) => item.AssignedToUserId === itemID
    );
    return result;
  }

  setShipmentData(data: any) {
    this.shipmentData = data;
  }
  getShipmentData() {
    return this.shipmentData;
  }
}
