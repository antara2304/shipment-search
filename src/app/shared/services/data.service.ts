import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private data: any;

  getShipmentList(): Promise<any> {
    return this.http.get('assets/mock.json').toPromise();
  }

  setData(_data: any) {
    console.log(_data);
    this.data = _data;
    console.log(this.data);
  }
  getData() {
    console.log(this.data);
    return this.data;
  }
}
