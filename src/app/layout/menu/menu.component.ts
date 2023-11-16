import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/shared/services/categorias.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'mobile-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  categorias: string[] = this.categoriasService.listar();
  showShoppingCart = false;

  constructor(
    private categoriasService: CategoriasService,
    private router: Router,
    private shoppingCartService: ShoppingCartService
  ) { }

  navigateToLogin(sideNav: MatSidenav): void {
    this.router.navigate(['/cadastro-cliente'])
    sideNav.close();
  }

  onShoppingCartClosed(): void {
    this.showShoppingCart = false;
  }
}
