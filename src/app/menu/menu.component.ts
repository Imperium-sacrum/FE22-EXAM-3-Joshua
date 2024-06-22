import { Component, OnInit } from '@angular/core';
import { productModel } from '../card-model';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
products:productModel[] = products;
 product:productModel={} as productModel;

constructor(private CS:CartService,private route:ActivatedRoute){}

ngOnInit(): void {

}

 addToCart(){
  this.CS.addToCart(this.product)
}
addToCard2(producto:any){
  this.CS.addToCart(producto);
  
}
}
