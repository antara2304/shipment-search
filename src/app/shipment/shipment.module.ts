import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [SearchResultComponent, DetailsComponent],
  imports: [CommonModule, ShipmentRoutingModule],
})
export class ShipmentModule {}
