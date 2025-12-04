import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from '../../../../shared/service/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { futurDateValidator } from '../../../../shared/Validators/futur-date.validator';
import { Events } from '../../../../models/event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent implements OnInit {
  eventForm:FormGroup;
  listEvents:Events[];
  isEditMode = false;
  currentId: number | null = null;

  constructor(
    private fb:FormBuilder,
    private eventService:EventsService,
    private router:Router,
    private route:ActivatedRoute
  ) {}

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

      this.route.paramMap.subscribe(params => {
        const idParam = params.get('id');
        if (idParam) {
          this.isEditMode = true;
          this.currentId = Number(idParam);
          this.loadEvent(this.currentId);
        }
      });
  }

 loadEvent(id: number): void {
    this.eventService.getEventById(id).subscribe({
      next: (event) => {
        if (!event) { return; }
        this.eventForm.patchValue({
          ...event,
          date: this.formatDate(event.date)
        });
      },
      error: (err) => console.error('Erreur lors du chargement de l\'événement', err)
    });
 }

 private formatDate(dateValue: any): string {
    const date = new Date(dateValue);
    return date.toISOString().split('T')[0];
 }

 onSubmit(): void {
    if (this.eventForm.valid) {
      const newEvent = {
        ...this.eventForm.value,
       // id: this.eventService.listEvents.length + 1,
        nbrLike: 0,
        organizerId: 1
      };

      const request$ = this.isEditMode && this.currentId
        ? this.eventService.updateEvent(this.currentId, newEvent)
        : this.eventService.addEvent(newEvent);

      request$.subscribe({
        next: (data) => {
          console.log(`Événement ${this.isEditMode ? 'mis à jour' : 'ajouté'} avec succès`, data);
          this.router.navigate(['/events']);
        },
        error: (err) => {
          console.error(`Erreur lors de ${this.isEditMode ? 'la mise à jour' : 'l\'ajout'} de l'événement`, err);
        },
        complete: () => console.log('Traitement événement terminé')
      });
    }
  }

}
