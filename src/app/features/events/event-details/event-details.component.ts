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

id:number;
event:Events | undefined;


  //injection de ActivatedRoute pour récupérer l'id de l'url
  constructor(private act:ActivatedRoute,private eventS:EventsService ) { }

ngOnInit(): void {
    //récupérer l'id de l'event à partir de l'url
  this.id= this.act.snapshot.params['id'];
  this.event=this.eventS.listEvents.find(e=>e.id==this.id);
  console.log(this.event);

}



}
