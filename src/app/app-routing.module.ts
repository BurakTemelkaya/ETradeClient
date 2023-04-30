import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DasboardComponent } from './admin/compenents/dasboard/dasboard.component';
import { HomeComponent } from './ui/compenents/home/home.component';

const routes: Routes = [
  {
    path:"admin",component:LayoutComponent,children:[
    {path:"",component:DasboardComponent},
    {path:"customers", loadChildren: ()=> import("./admin/compenents/customer/customer.module").then
     (module=> module.CustomerModule)},
     {path:"products", loadChildren: ()=> import("./admin/compenents/products/products.module").then
     (module=> module.ProductsModule)},
     {path:"orders", loadChildren: ()=> import("./admin/compenents/order/order.module").then
     (module=> module.OrderModule)}
    ]
  },
  {path:"",component:HomeComponent},
  {path:"basket",loadChildren:()=> import("./ui/compenents/baskets/baskets.module").then(module=> module.BasketsModule)},
  {path:"products",loadChildren:()=> import("./ui/compenents/products/products.module").then(module=> module.ProductsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
