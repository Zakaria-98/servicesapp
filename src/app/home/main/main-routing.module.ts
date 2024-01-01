import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main.component';

const routes: Routes = [ {
  path: '',
  component: MainComponent,
},
{
  path: 'cart',
  component: CartComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
