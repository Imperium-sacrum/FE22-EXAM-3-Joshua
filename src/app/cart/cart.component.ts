import { Component, OnInit, numberAttribute } from '@angular/core';
import { CartService } from '../service/cart.service';
import { productModel } from '../card-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  pro: productModel[]= []
   total: number = 0;
   totalDiscont:number=0;
   newTotal:number=0;
   newtotalService:number=0;
  constructor(private CartService: CartService){}
  ngOnInit(): void  {
    this.total = this.CartService.getTotal();
    this.newTotal= this.CartService.getNewTotal();
    this.totalDiscont = this.CartService.getDiscont();
    this.pro = this.CartService.getCart();
  }
  onIncreaseQtty(products:productModel){
    this.CartService.increaseQtty(products);
    this.total = this.CartService.getTotal();
    this.newTotal = this.CartService.getNewTotal();
    this.totalDiscont = this.CartService.getDiscont();
  }
  onDecreaseQtty(products:productModel){
    this.CartService.onDecreaseQtty(products);
    this.total = this.CartService.getTotal();
    this.newTotal = this.CartService.getNewTotal();
    this.totalDiscont = this.CartService.getDiscont();
    this.pro = this.CartService.cart;
  }
  onDelete(index:number){
    this.CartService.deleteItem(index)
    this.total = this.CartService.getTotal();
    this.newTotal = this.CartService.getNewTotal();
    this.totalDiscont = this.CartService.getDiscont();
  }
}
