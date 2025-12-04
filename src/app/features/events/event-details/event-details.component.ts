import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events } from '../../../models/event';
import { EventsService } from '../../../shared/service/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

id!:number;
event?:Events; ;


  //injection de ActivatedRoute pour récupérer l'id de l'url
  constructor(private act:ActivatedRoute,private eventS:EventsService ) { }

ngOnInit(): void {
    //récupérer l'id de l'event à partir de l'url
  this.id= this.act.snapshot.params['id'];
 this.eventS.getEventById(this.id).subscribe({
      next: (data: Events | null) => {
        this.event = data || undefined;

      },
      error: (err) => {
        console.error('Erreur lors de la récupération de l\'événement', err);
        this.event = undefined;
      },
      complete: () => console.log('Récupération de l\'événement terminée')
    });
  //this.event=this.eventS.getAllEvents.find(e=>e.id==this.id);
  console.log(this.event);

}



}
