import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByLikesPipe } from './pipes/order-by-likes.pipe';

@NgModule({
  declarations: [OrderByLikesPipe],
  imports: [CommonModule],
  exports: [OrderByLikesPipe]
})
export class SharedModule { }
