import {Component} from '@angular/core';
import {CategoriasService} from 'src/app/shared/services/categorias.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss']
})
export class DesktopMenuComponent {

  categorias: string[] = this.categoriasService.listar();
  showShoppingCart = false;
  productsInShoppingCartCount = 0;

  constructor(
    private categoriasService: CategoriasService,
    private roteador: Router
  ) {
  }

  onShoppingCartClosed(): void {
    this.showShoppingCart = false;
  }

  onProductAdded(numberOfProducts: number): void {
    this.productsInShoppingCartCount = numberOfProducts;
  }

  clienteEstaLogado(): boolean {
    return !!localStorage.getItem("clienteAtual");
  }

  fazerLogout() {
    if (localStorage.length > 0) {
      localStorage.clear()
    }
  }

  editarCliente() {
    const idDoCliente = localStorage.getItem('clienteAtual');
    if (idDoCliente) {
      this.roteador.navigate(['edicao-cliente', idDoCliente]);
    }
  }
}
