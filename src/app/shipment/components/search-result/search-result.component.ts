import { Component } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass'],
})
export class SearchResultComponent {
  data: string[] = []; // Holds the content to display
  page: number = 1; // Current page for API calls or data fetching
  loading: boolean = false; // Tracks loading status
  scrollDistance = 2;
  scrollUpDistance = 2;
  scrollMaxDistance = 2;
  total = 101;

  selectedItems: string[] = []; // Holds selected items
  items = ['Option 1Option 1', 'Option 2 Option 2', 'Option 3', 'Option 4']; // Dropdown options

  constructor() {
    this.loadMoreData();
  }

  loadMoreData() {
    if (this.loading) return; // Avoid multiple requests
    this.loading = true;

    // Simulate an API call to fetch more data
    setTimeout(() => {
      const newData = Array.from(
        { length: 20 },
        (_, index) => `Item ${index + 1 + (this.page - 1) * 20}`
      );
      this.data = [...this.data, ...newData]; // Add new data to existing
      this.page += 1; // Increase page for next request
      this.loading = false; // Reset loading status
    }, 1500); // Simulate a delay for loading
  }

  toggleItem(item: string) {
    const index = this.selectedItems.indexOf(item);
    if (index === -1) {
      this.selectedItems.push(item); // Add item to the selected list
    } else {
      this.selectedItems.splice(index, 1); // Remove item from the selected list
    }
  }

  isItemSelected(item: string): boolean {
    return this.selectedItems.includes(item); // Check if item is selected
  }

  displaySelected(): string {
    return this.selectedItems.join(', ') || 'None'; // Display selected items
  }
}
