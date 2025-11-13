import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent implements OnInit {

  listProducts: Product[] = [];
    searchTerm: string = '';
    ngOnInit(){
          this.listProducts = [
 {id: 1, name: 'Tv A', price: 2000, description: 'Description of TV A', quantity: 10, like: 0, image: 'https://cdn.thewirecutter.com/wp-content/media/2024/12/BVEST-32-INCH-TVS-2048px-2870-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024'},
          {id: 2, name: 'Tv B', price: 2000, description: 'Description of TV B', quantity: 5, like: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHtgH8g41-tJQQ14SepXV5lJ_kKdpIVcaIA&s'},
          {id: 3, name: 'TV C', price: 300, description: 'Description of TV C', quantity: 0, like: 0, image: 'https://cdn.pixabay.com/photo/2018/12/22/03/27/smart-tv-3889141_1280.png'}
          ]
    }

    buy(p:Product){
    }
}
