import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-records',
  templateUrl: './view-records.component.html',
  styleUrls: ['./view-records.component.sass'],
})
export class ViewRecordsComponent {
  @Input() data: any;
}
