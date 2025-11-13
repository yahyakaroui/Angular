import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import Swal from "sweetalert2";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  //methodes des data binding
 //methode 1 title :string="Welcome To Product Page 1"
  title :string;
  listProducts:Product[]=[];
  searchTerm:string="";
//methode 2
  /*constructor(){
    this.title="Welcome To Product Page 2"
  }*/

  //methode 3
  ngOnInit(): void {
    this.title="Welcome To Product Page 3";
    this.listProducts=[
      {id:1,name:"product 1",price:1000,description:"desc 1",like:0,quantity:0},
      {id:2,name:"product 2",price:2000,description:"desc 2",like:2,quantity:10},
      {id:3,name:"product 3",price:3000,description:"desc 3",like:10,quantity:20},
      {id:4,name:"product 4",price:4000,description:"desc 4",like:4,quantity:5},
    ]
  }

  //decrease quantity when click on the button buy
  buy(product:Product){
    if(product.quantity>0){
      product.quantity--;
    }else{
      //sweet alert2
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Product is out of stock!',
      })

    }

  }
  //increase like when click on the button like
  like(product:Product){
    product.like++;
  }

  //filter products by name
   filteredProducts(): Product[] {
    return this.listProducts.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


}
