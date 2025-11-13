import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from '../../../../shared/service/events.service';
import { Router } from '@angular/router';
import { futurDateValidator } from '../../../../shared/Validators/futur-date.validator';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent implements OnInit {
  eventForm:FormGroup;

  constructor(private fb:FormBuilder,private eventService:EventsService,private router:Router) {}

  ngOnInit(): void {
      this.eventForm = this.fb.group({
        title: ['', [Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z ]*')]],
        description: ['', [Validators.required,Validators.minLength(30)]],
        date :['', [Validators.required,futurDateValidator(7)]],
        location: ['', [Validators.required]],
        price: [0,[Validators.required,Validators.pattern(/^\d+(\.\d+)?$/)]],
        imageUrl: [''],
        nbPlaces: [0,[Validators.required,Validators.pattern(/^([1-9][0-9]?|100)$/)]]
      });
  }

 onSubmit(): void {
    if (this.eventForm.valid) {
      const newEvent = {
        ...this.eventForm.value,
        id: this.eventService.listEvents.length + 1,
        nbrLike: 0,
        organizerId: 1
      };

      this.eventService.listEvents.push(newEvent);
      // Navigation vers la liste des événements après l'ajout
      this.router.navigate(['/events']);
    }
  }

}
