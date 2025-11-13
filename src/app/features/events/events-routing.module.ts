import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AddEventComponent } from './components/add-event/add-event.component';


const routes: Routes = [{ path: '', component: EventsComponent ,
   children: [
  {path:'',component:ListEventComponent},
  {path:'event-details/:id', component:EventDetailsComponent},
  {path:'add-event', component:AddEventComponent}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
