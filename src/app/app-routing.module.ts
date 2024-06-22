import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'details/:x', component:DetailsComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'cart', component:CartComponent},
  {path:'contact', component:ContactComponent},
  {path: '**', redirectTo:'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
