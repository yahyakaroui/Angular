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
  eventt:Events[]=[];
  searchTerm: string = '';

  ngOnInit(): void {
    //récuperer la liste des events
      this.events.getAllEvents().subscribe({
      next: (data: Events[] | null) => {
        this.ListEventsWithLike = (data || []).filter(e=>e.nbrLike>0);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des events', err);
        this.eventt = [];
      },
      complete: () => console.log('Récupération des events terminée')
    });
       //this.ListEventsWithLike= this.eventt.filter(e=>e.nbrLike>0);
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
