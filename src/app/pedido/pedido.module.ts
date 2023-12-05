import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ListagemPedidoComponent } from './listagem-pedido/listagem-pedido.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FirestoreModule } from '../shared/firestore/firestore.module';

@NgModule({
  declarations: [
    CarrinhoComponent,
    ListagemPedidoComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    RouterLink,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    FirestoreModule
  ],
  exports: [
    CarrinhoComponent
  ]
})
export class PedidoModule { }
