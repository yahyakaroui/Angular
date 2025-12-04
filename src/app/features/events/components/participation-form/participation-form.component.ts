import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participation } from '../../../../models/participation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrl: './participation-form.component.css'
})
export class ParticipationFormComponent implements OnInit {
  constructor(private ar:ActivatedRoute) { }
  price:number=0;
  listParticipation:Participation[]=[];
  ngOnInit(): void {
  this.price= this.ar.snapshot.params['price'];
  }

  onSubmit(participateForm: NgForm): void {
    if (participateForm.valid) {
      const newParticipation: Participation = {
        userId: 1, // id user connecté
        eventId: Number(this.ar.snapshot.params['id']),
        emailParticipant: participateForm.value.email,
        nbPlaces: Number(participateForm.value.nbp),
        status: 'pending',
        id: 0,
        registrationDate: new Date()
      };
       this.listParticipation.push(newParticipation);
       console.log(this.listParticipation);
      participateForm.resetForm();
    }  }
}
