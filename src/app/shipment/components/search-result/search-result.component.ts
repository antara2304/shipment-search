import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass'],
})
export class SearchResultComponent implements OnInit {
  data: any = []; // Holds the content to display
  page: number = 10; // Current page for API calls or data fetching
  loading: boolean = false; // Tracks loading status
  scrollDistance = 2;
  scrollUpDistance = 2;
  scrollMaxDistance = 2;
  total: number = 0;
  prev: number = 0;

  selectedItems: string[] = []; // Holds selected items
  items: any;

  private dataSource: any = [];
  private copyOfDs: any = [];
  constructor(private route: ActivatedRoute, private dataSvc: DataService) {}
  ngOnInit() {
    this.dataSource = this.dataSvc.getData();
    this.copyOfDs = [...this.dataSource];
    this.total = this.copyOfDs.length;
    this.items = [...new Set(this.dataSource.map((item: any) => item.Status))];
    // this.selectedItems = this.items;
    this.loadMoreData();
  }
  loadMoreData() {
    if (this.loading) return;
    this.loading = true;
    console.log(this.copyOfDs);
    console.log(this.data);

    setTimeout(() => {
      const newData = this.copyOfDs.slice(this.prev, this.page);
      this.data = [...this.data, ...newData];
      console.log(this.data);
      this.prev = this.page;
      this.page += 10;
      this.loading = false;
    }, 1500);
  }

  toggleItem(item: string) {
    const index = this.selectedItems.indexOf(item);
    if (index === -1) {
      this.selectedItems.push(item); // Add item to the selected list
    } else {
      this.selectedItems.splice(index, 1); // Remove item from the selected list
    }
    console.log(this.selectedItems);
    if (this.selectedItems.length) {
      this.copyOfDs = this.dataSource.filter((each: any) =>
        this.selectedItems.includes(each.Status)
      );
    } else {
      this.copyOfDs = [...this.dataSource];
    }
    this.total = this.copyOfDs.length;
    this.data = [];
    this.prev = 0;
    this.page = 10;
    console.log(this.copyOfDs);
    this.loadMoreData();
  }

  isItemSelected(item: string): boolean {
    return this.selectedItems.includes(item); // Check if item is selected
  }

  displaySelected(): string {
    return this.selectedItems.join(', ') || 'None'; // Display selected items
  }
}
