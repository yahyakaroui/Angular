import { Component } from '@angular/core';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  list: Product[] = [];

  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    like: 0,
    quantity: 0,
    image: ''
  } as Product;

  save(form: any) {
    if (form.valid) {
      this.product.id = this.list.length + 1;
      this.list.push({ ...this.product });
      alert('Produit ajouté avec succès !');
      this.product = {
        id: 0,
        name: '',
        price: 0,
        description: '',
        like: 0,
        quantity: 0,
        image: ''
      } as Product;
      form.reset();
    }
  }

}
