import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }
  listEvents = [
      {
        id: 1,
        title: 'Angular Summit',
        description: 'Conférence sur Angular et l’écosystème front-end.',
        date: new Date('2025-11-10'),
        location: 'Tunis',
        price: 50,
        organizerId: 101,
        imageUrl: 'https://m.media-amazon.com/images/I/71vC4ryHjOL._UF1000,1000_QL80_.jpg',
        nbPlaces: 25,
        nbrLike: 0
      },
      {
        id: 2,
        title: 'Web Dev Days',
        description: 'Journée dédiée aux frameworks web modernes.',
        date: new Date('2025-01-05'),
        location: 'Ariana',
        price: 30,
        organizerId: 102,
        imageUrl: 'https://cdn.dribbble.com/userupload/37287941/file/original-a59d13499667b765fb5aceb8b5d5bf0d.jpg',
        nbPlaces: 0,
        nbrLike: 3
      },
      {
        id: 3,
        title: 'mobile Dev Days',
        description: 'Journée dédiée aux frameworks mobiles modernes.',
        date: new Date('2025-11-05'),
        location: 'Sfax',
        price: 70,
        organizerId: 103,
        imageUrl: 'https://cdn.dribbble.com/userupload/37287941/file/original-a59d13499667b765fb5aceb8b5d5bf0d.jpg',
        nbPlaces: 10,
        nbrLike: 13
      },
      {
        id: 4,
        title: 'React Summit',
        description: 'Conférence sur React et l’écosystème front-end.',
        date: new Date('2023-12-15'),
        location: 'Tunis',
        price: 60,
        organizerId: 104,
        imageUrl: 'https://m.media-amazon.com/images/I/71vC4ryHjOL._UF1000,1000_QL80_.jpg',
        nbPlaces: 5,
        nbrLike: 0
      },
      {
        id: 5,
        title: 'Vue.js Conference',
        description: 'Conférence sur Vue.js et les technologies associées.',
        date: new Date('2024-03-20'),
        location: 'Sousse',
        price: 40,
        organizerId: 105,
        imageUrl: 'https://m.media-amazon.com/images/I/71vC4ryHjOL._UF1000,1000_QL80_.jpg',
        nbPlaces: 15,
        nbrLike: 0
      },
      {
        id: 6,
        title: 'Node.js Meetup',
        description: 'Rencontre pour les développeurs Node.js.',
        date: new Date('2024-06-18'),
        location: 'Bizerte',
        price: 20,
        organizerId: 106,
        imageUrl: 'https://cdn.dribbble.com/userupload/37287941/file/original-a59d13499667b765fb5aceb8b5d5bf0d.jpg',
        nbPlaces: 0,
        nbrLike: 0
      },
      {
        id: 7,
        title: 'Full Stack Fest',
        description: 'Festival pour les développeurs full stack.',
        date: new Date('2024-09-12'),
        location: 'Gabes',
        price: 80,
        organizerId: 107,
        imageUrl: 'https://m.media-amazon.com/images/I/71vC4ryHjOL._UF1000,1000_QL80_.jpg',
        nbPlaces: 20,
        nbrLike: 8
      },
      {
        id: 8,
        title: 'DevOps Days',
        description: 'Journée dédiée aux pratiques DevOps.',
        date: new Date('2025-12-01'),
        location: 'Kairouan',
        price: 55,
        organizerId: 108,
        imageUrl: 'https://cdn.dribbble.com/userupload/37287941/file/original-a59d13499667b765fb5aceb8b5d5bf0d.jpg',
        nbPlaces: 12,
        nbrLike: 0
      },
      {
        id: 9,
        title: 'AI & ML Conference',
        description: 'Conférence sur l’intelligence artificielle et le machine learning.',
        date: new Date('2025-10-22'),
        location: 'Monastir',
        price: 90,
        organizerId: 109,
        imageUrl: 'https://m.media-amazon.com/images/I/71vC4ryHjOL._UF1000,1000_QL80_.jpg',
        nbPlaces: 8,
        nbrLike:0
      }
    ];
}
