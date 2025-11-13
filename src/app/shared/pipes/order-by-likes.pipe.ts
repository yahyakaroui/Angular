import { Pipe, PipeTransform } from '@angular/core';
import { Events } from '../../models/event';

@Pipe({
  name: 'orderByLikes'
})
export class OrderByLikesPipe implements PipeTransform {

  transform(listEvents: Events[]): Events[] {
    if (!listEvents || listEvents.length === 0) {
      return [];
    }

    return listEvents
      .sort((a, b) => (b.nbPlaces - a.nbPlaces))
      .slice(0, 3);
  }
}
