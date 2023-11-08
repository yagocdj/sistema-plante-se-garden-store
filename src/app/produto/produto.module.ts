import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaProdutoComponent } from './loja-produto/loja-produto.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    LojaProdutoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class ProdutoModule { }
