import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentRoutingModule } from './shipment-routing.module';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { DetailsComponent } from './components/details/details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {
  NgbCollapse,
  NgbNavModule,
  NgbPopoverModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ViewRecordsComponent } from './components/view-records/view-records.component';

@NgModule({
  declarations: [SearchResultComponent, DetailsComponent, ViewRecordsComponent],
  imports: [
    CommonModule,
    ShipmentRoutingModule,
    InfiniteScrollModule,
    NgbPopoverModule,
    NgbCollapse,
    NgbNavModule,
  ],
})
export class ShipmentModule {}
