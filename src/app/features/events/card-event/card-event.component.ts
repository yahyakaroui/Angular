import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Events } from '../../../models/event';
import { EventsService } from '../../../shared/service/events.service';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent {

  constructor(private events:EventsService) { }
  //INPUT event nest7a9ou fy les composants parents favoris et best event
  //RQ: dyma ky nest7a9 var bch nab3athha l les parents (autres composants que l composant elli declarytha fyh) n7otha fy @Input
  @Input() e:Events;
  //INPUT to show or hide the like button
  @Input() showLike:boolean=true;

   //1-  preparer la notification like à envoyer aux parent (favoris)
@Output() notificationLike = new EventEmitter()
//1-  preparer la notification best à envoyer aux parent (best)
@Output() notificationBest = new EventEmitter()


//2- envoyer la notification suite a une clique sur le bouton like
sendDataToParent(e:Events){
  this.notificationLike.emit(e);
}


  isExpired(e:Events):boolean{
    const today = new Date();
    return e.date < today;
  }

  deleteEvent(e:Events){
    this.events.deleteEvent(e.id).subscribe({
      next: () => {
        //recharger la page après la suppression
        window.location.reload();
        

        console.log('Événement supprimé avec succès');


  }
    ,      error: (err) => {
        console.error('Erreur lors de la suppression de l\'événement', err);
      },
      complete: () => console.log('Suppression de l\'événement terminée')
    });
  }

}
