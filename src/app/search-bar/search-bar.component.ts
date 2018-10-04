import { Component } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  public isActive: boolean;

  public toggleFocus(): void {
    this.isActive = !this.isActive;
  }
}
