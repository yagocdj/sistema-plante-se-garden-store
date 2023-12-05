import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Produto } from 'src/app/shared/model/produto';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { PedidoFirestoreService } from 'src/app/shared/services/firestore/pedido-firestore.service';
import { Pedido } from 'src/app/shared/model/pedido';
import { Cliente } from 'src/app/shared/model/cliente';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarrinhoComponent implements OnChanges, OnInit {
  @Input('show') showSidenav = false;
  @Output() sidenavClosed = new EventEmitter<boolean>();
  @Output() productAdded = new EventEmitter<number>();
  @ViewChild('sidenav') sidenavElement!: MatSidenav;

  cartProducts: Produto[] = [];
  totalValue = 0;
  defaultCostumer: Cliente | null = null;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private orderServide: PedidoFirestoreService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sidenavElement) {
      this.sidenavElement.toggle(changes['showSidenav'].currentValue);
    }
    this.totalValue = this.shoppingCartService.getTotalValue();
    this.productAdded.emit(this.cartProducts.length);
  }

  ngOnInit(): void {
    // this.fetchDefaultCostumer();
    this.cartProducts = this.shoppingCartService.shoppingCart;
  }

  closeSidenav(): void {
    if (this.sidenavElement) {
      this.sidenavClosed.emit(false);
      this.sidenavElement.toggle();
    }
  }

  removeProductFromCart(productId: string): void {
    this.shoppingCartService.removeProductFromCart(productId);
    this.cartProducts = this.shoppingCartService.shoppingCart;
    this.totalValue = this.shoppingCartService.getTotalValue();
  }

  createNewOrder(): void {
    const orderToBeInserted = {
      cliente: this.defaultCostumer,
      produtos: [...this.cartProducts],
      valorTotal: this.totalValue,
    } as Pedido;

    this.orderServide.inserir(orderToBeInserted).subscribe(
      _ => {
        this.cartProducts = [];
        this.totalValue = 0;
        this.closeSidenav();
      }
    );
  }

  // Debug only method
  // private fetchDefaultCostumer(): void {
  //   this.costumerService.localizar('11100099910').subscribe(
  //     costumer => this.defaultCostumer = costumer
  //   );
  // }
}
