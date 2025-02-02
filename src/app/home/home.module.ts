import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentSearchComponent } from './components/shipment-search/shipment-search.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ShipmentSearchComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, TranslateModule],
})
export class HomeModule {}
