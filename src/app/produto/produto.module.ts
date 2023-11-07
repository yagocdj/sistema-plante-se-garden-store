import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaProdutoComponent } from './loja-produto/loja-produto.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    LojaProdutoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ProdutoModule { }
