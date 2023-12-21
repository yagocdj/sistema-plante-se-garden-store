import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Produto} from 'src/app/shared/model/produto';
import {ShoppingCartService} from 'src/app/shared/services/shopping-cart.service';
import {PedidoService} from 'src/app/shared/services/pedido.service';
import {Pedido} from 'src/app/shared/model/pedido';
import {Cliente} from 'src/app/shared/model/cliente';
import {ClienteService} from 'src/app/shared/services/cliente.service';
import {MensagemSweetService} from "../../shared/services/mensagem-sweet.service";

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

  constructor(
    private shoppingCartService: ShoppingCartService,
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private mensagemService: MensagemSweetService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sidenavElement) {
      this.sidenavElement.toggle(changes['showSidenav'].currentValue);
    }
    this.totalValue = this.shoppingCartService.getTotalValue();
    this.productAdded.emit(this.cartProducts.length);
  }

  ngOnInit(): void {
    this.fetchCostumer();
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
    const idDoCliente = localStorage.getItem('clienteAtual');
    if (idDoCliente) {
      this.clienteService.localizarPorId(idDoCliente).subscribe(
        cliente => {
          if (cliente) {
            const pedidoASerInserido = {
              cliente: cliente,
              produtos: [...this.cartProducts],
              valorTotal: this.totalValue
            } as Pedido;
            this.pedidoService.insert(pedidoASerInserido).subscribe(
              answer => {
                this.cartProducts = [];
                this.totalValue = 0;
                this.closeSidenav();
                this.mensagemService.sucesso('Pedido efetuado com sucesso!');
              }
            );
          } else {
            this.mensagemService.erro('Não há cliente com o ID ' + idDoCliente);
          }
        }
      );
    } else {
      this.mensagemService.erro('É necessário fazer o login antes de fazer um pedido.')
    }
  }

  // Debug only method
  private fetchCostumer(): void {

  }
}
