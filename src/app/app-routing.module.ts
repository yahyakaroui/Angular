import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './layout/product/product.component';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { ListEventComponent } from './features/events/list-event/list-event.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
 // {path:'events',component:ListEventComponent},
  { path: 'events', loadChildren: () => import('./features/events/events.module').then(m => m.EventsModule) },
  { path: 'feedback', loadChildren: () => import('./features/feedback/feedback.module').then(m => m.FeedbackModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },

  {path: '**', component: NotFoundComponent} //lezmou ykoun  e5er route dyma si non ywalliew lkol yhezou lyh
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
