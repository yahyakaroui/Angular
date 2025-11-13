import { Component, OnInit } from '@angular/core';
import { Events } from '../../../models/event';
import { EventsService } from '../../../shared/service/events.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrl: './favoris.component.css'
})
export class FavorisComponent implements OnInit {

  constructor(private events:EventsService) { }
  ListEventsWithLike:Events[]=[];
  searchTerm: string = '';

  ngOnInit(): void {
       this.ListEventsWithLike= this.events.listEvents.filter(e=>e.nbrLike>0);
  }
    handleLike(e:Events){
     e.nbrLike++;
}
    //filter events by title or location
    filteredEvents(): Events[] {
    if (!this.searchTerm) {
      return this.ListEventsWithLike;
    }
    const lowerSearchTerm = this.searchTerm.toLowerCase();
    return this.ListEventsWithLike.filter(event =>
      event.title.toLowerCase().includes(lowerSearchTerm) ||
      event.location.toLowerCase().includes(lowerSearchTerm)
    );
  }

}
