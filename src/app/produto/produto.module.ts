import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaProdutoComponent } from './loja-produto/loja-produto.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LojaProdutoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class ProdutoModule { }
