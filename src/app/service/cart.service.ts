import { Injectable } from '@angular/core';
import { productModel } from '../card-model';
import { products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: productModel[]=[]
  total=0
  constructor() { }
  addToCart( products:productModel){
    if (this.cart.includes(products)){
      products.qtty++
    }else{
    this.cart.push(products)}
  }
  addToCard2(products:any){
    console.log(products);
    
  }
  getCart(){
    return this.cart
  }
  getTotal():number{
    let total =0;
    let total2 =0;
    this.cart.forEach(products=> total += products.price*products.qtty)
    total2= total + total/10
    return total2
  }

  getNewTotal():number{
    let total =0;
    let total2 =0;
    let total3 =0;
    this.cart.forEach(products=> total += products.price*products.qtty)
        total2= total + total/10,
        total3= total2 - total2/15

    return total3
  }
  
  getDiscont():number{
    let total =0;
    let total2 =0;
    let total3 =0;
    this.cart.forEach(products=> total += products.price*products.qtty)
    total2= total + total/10
    total3= total2/15
    return total3
  }
  increaseQtty(products:productModel){
    products.qtty++;
  }
  onDecreaseQtty(products:productModel){

    if (products.qtty > 1) {
      products.qtty--;
    }
    else{
      this.cart = this.cart.filter(cart => products != cart)
    }
  }
    deleteItem(index:number){
    this.cart[index].qtty=1;
    this.cart.splice(index, 1);
  }
}
