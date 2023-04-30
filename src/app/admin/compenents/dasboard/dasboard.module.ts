import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardComponent } from './dasboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DasboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:DasboardComponent}
    ])
  ]
})
export class DasboardModule { }
