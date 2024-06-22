import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productModel } from '../card-model';
import { products } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent{
  id: number= 0;
  product:productModel={} as productModel;
  

  constructor(private route:ActivatedRoute, private cartService:CartService){ 
    
    this.id= +this.route.snapshot.params['x'];
    this.product = products[this.id];
    console.log(this.product);
  }
  addToCart(){
    this.cartService.addToCart(this.product);
    console.log(this.cartService.getCart());
    
  }

 
}
