import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemProdutoComponent } from './listagem-produto/listagem-produto.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {FlexModule} from '@angular/flex-layout';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListagemProdutoComponent,
    EditarProdutoComponent,
    CadastrarProdutoComponent

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    FlexModule,
    MatDialogModule,
    RouterModule
  ],
  exports: [ListagemProdutoComponent]
})
export class ProdutoModule { }
