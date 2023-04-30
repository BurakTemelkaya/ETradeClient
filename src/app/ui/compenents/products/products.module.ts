import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { HomeModule } from '../home/home.module';
import { BasketsModule } from '../baskets/baskets.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    // HomeModule,
    // BasketsModule,
    RouterModule.forChild([
      {path:"",component:ProductsComponent}
    ])
  ]
})
export class ProductsModule { }
