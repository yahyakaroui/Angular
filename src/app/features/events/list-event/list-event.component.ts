import { Component } from '@angular/core';
import { Events } from '../../../models/event';
import { EventsService } from '../../../shared/service/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
events:Events[]=[];
searchTerm: string = '';
constructor(private eventS:EventsService) { }

ngOnInit(): void {
    this.eventS.getAllEvents().subscribe({
      next: (data: Events[] | null) => {
        this.events = data || [];
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des events', err);
        this.events = [];
      },
      complete: () => console.log('Récupération des events terminée')
    });
  }
 //increase like when click on the button like
   handleLike(e:Events){
  e.nbrLike++;
}

//expired event
  isExpired(e:Events):boolean{
    const today = new Date();
    return e.date < today;
  }
//filter events by title or location
   filteredEvents(): Events[] {
    if (!this.searchTerm) {
      return this.events;
    }
    const lowerSearchTerm = this.searchTerm.toLowerCase();
    return this.events.filter(event =>
      event.title.toLowerCase().includes(lowerSearchTerm) ||
      event.location.toLowerCase().includes(lowerSearchTerm)
    );
  }



}
