import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Produto } from 'src/app/shared/model/produto';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarrinhoComponent implements OnChanges, OnInit {
  @Input('show') showSidenav = false;
  @Output() sidenavClosed = new EventEmitter<boolean>();
  @ViewChild('sidenav') sidenavElement!: MatSidenav;

  cartProducts: Produto[] = [];
  totalValue = 0;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sidenavElement) {
      this.sidenavElement.toggle(changes['showSidenav'].currentValue);
    }
    this.totalValue = this.shoppingCartService.getTotalValue();
  }

  ngOnInit(): void {
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
}
