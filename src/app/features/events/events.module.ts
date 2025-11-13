import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FavorisComponent } from './favoris/favoris.component';
import { CardEventComponent } from './card-event/card-event.component';
import { BestEventComponent } from './best-event/best-event.component';
import { AddEventComponent } from './components/add-event/add-event.component';

import { SharedModule } from '../../shared/shared.module';  // <-- IMPORTANT

@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    EventDetailsComponent,
    FavorisComponent,
    CardEventComponent,
    BestEventComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule    // <-- POUR UTILISER PIPE + DIRECTIVE
  ]
})
export class EventsModule { }
