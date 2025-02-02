import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentSearchComponent } from './components/shipment-search/shipment-search.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShipmentSearchComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
