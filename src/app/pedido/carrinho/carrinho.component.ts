import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Produto } from 'src/app/shared/model/produto';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { Pedido } from 'src/app/shared/model/pedido';
import { Cliente } from 'src/app/shared/model/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';

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
    private orderServide: PedidoService,
    private costumerService: ClienteService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sidenavElement) {
      this.sidenavElement.toggle(changes['showSidenav'].currentValue);
    }
    this.totalValue = this.shoppingCartService.getTotalValue();
    this.productAdded.emit(this.cartProducts.length);
  }

  ngOnInit(): void {
    this.fetchDefaultCostumer();
    this.cartProducts = this.shoppingCartService.shoppingCart;
  }

  closeSidenav(): void {
    if (this.sidenavElement) {
      this.sidenavClosed.emit(false);
      this.sidenavElement.toggle();
    }
  }

  removeProductFromCart(productId: number): void {
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

    this.orderServide.insert(orderToBeInserted).subscribe(
      _ => {
        this.cartProducts = [];
        this.totalValue = 0;
        this.closeSidenav();
      }
    );
  }

  // Debug only method
  private fetchDefaultCostumer(): void {
    this.costumerService.localizarPorCpf('00011100099').subscribe(
      costumer => {
        this.defaultCostumer = costumer[0] ? costumer[0] : null;
        console.log('DEFAULT ')
        console.log(this.defaultCostumer);
      }
    );
  }
}
