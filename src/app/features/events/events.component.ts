import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  selectedFilter: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // Set initial value based on current route
    const currentUrl = this.router.url;
    if (currentUrl === '/events') {
      this.selectedFilter = 'all';
    }

    // Listen to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // If we navigate to add-event or event-details, set filter to null
      if (this.router.url.includes('/add-event') || this.router.url.includes('/event-details')) {
        this.selectedFilter = null;
      }
    });
  }

  onFilterChange(value: string) {
    this.selectedFilter = value;
  }
}
