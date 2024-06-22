import { Component } from '@angular/core';
import { productModel } from '../card-model';
import { products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
newProducts: productModel [];
constructor(){
this.newProducts=products
}
}
