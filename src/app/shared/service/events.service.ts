import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from '../../models/event';
import { Participation } from '../../models/participation';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }
  //urls de backend
  apiUrl = 'http://localhost:3000/events';
  participationUrl = 'http://localhost:3000/participations';

  //methode pour recuperer tous les evenements
 getAllEvents():Observable<Events[]>{
    return this.http.get<Events[]>(this.apiUrl);
 }

 //methode pour recuperer un evenement par son id
 getEventById(id:number):Observable<Events>{
  return this.http.get<Events>(this.apiUrl+'/'+id);
}
  //methode pour ajouter un evenement
  addEvent(event:Events):Observable<Events>{
    return this.http.post<Events>(this.apiUrl,event);
  }
  //methode pour supprimer un evenement
  deleteEvent(id:number):Observable<void>{
    return this.http.delete<void>(this.apiUrl+'/'+id);
  }
  //methode pour mettre a jour un evenement

  updateEvent(id:number,event:Events):Observable<Events>{
    return this.http.put<Events>(this.apiUrl+'/'+id,event);
  }

  //participations
  addParticipationToBackend(participation: Participation): Observable<Participation> {
    return this.http.post<Participation>(this.participationUrl, participation);
  }

  getParticipationsByUser(userId: number): Observable<Participation[]> {
    return this.http.get<Participation[]>(`${this.participationUrl}?userId=${userId}`);
  }

  deleteParticipation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.participationUrl}/${id}`);
  }



}
