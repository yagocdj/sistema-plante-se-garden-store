import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaProdutoComponent } from './loja-produto/loja-produto.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MenuProdutoComponent } from './menu-produto/menu-produto.component';
import { RouterModule } from '@angular/router';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListagemProdutoComponent } from './listagem-produto/listagem-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PesquisaProdutoComponent } from './pesquisa-produto/pesquisa-produto.component';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    LojaProdutoComponent,
    MenuProdutoComponent,
    CadastrarProdutoComponent,
    ListagemProdutoComponent,
    EditarProdutoComponent,
    PesquisaProdutoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatMenuModule
  ]
})
export class ProdutoModule { }
