import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../shared/service/events.service';
import { Events } from '../../../models/event';

@Component({
  selector: 'app-best-event',
  templateUrl: './best-event.component.html',
  styleUrl: './best-event.component.css'
})
export class BestEventComponent implements OnInit {
  constructor(private events:EventsService) { }
  bestEvent:Events[]=[];
  searchTerm: string = '';

  ngOnInit(): void {
       //this.bestEvent= this.events.listEvents.filter(e=>e.nbPlaces>=15);
       this.bestEvent= this.events.listEvents;
  }
  //recevoir la notification de like de card event
    handleLike(e:Events){
      e.nbrLike++;
    }

    //filter events by title or location
    filteredEvents(): Events[] {
    if (!this.searchTerm) {
      return this.bestEvent;
    }
    const lowerSearchTerm = this.searchTerm.toLowerCase();
    return this.bestEvent.filter(event =>
      event.title.toLowerCase().includes(lowerSearchTerm) ||
      event.location.toLowerCase().includes(lowerSearchTerm)
    );
  }

}
