import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentSearchComponent } from './components/shipment-search/shipment-search.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [ShipmentSearchComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
