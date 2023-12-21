import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import {CategoriasService} from "../../shared/services/categorias.service";

@Component({
  selector: 'app-loja-produto',
  templateUrl: './loja-produto.component.html',
  styleUrls: ['./loja-produto.component.scss']
})
export class LojaProdutoComponent implements OnInit {
  productsInfo: Produto[];
  numberOfCols: number;

  constructor(
    private produtoService: ProdutoService,
    private responsive: BreakpointObserver,
    private shoppingCartService: ShoppingCartService,
    private categoriasService: CategoriasService
  ) {
    this.productsInfo = []
    this.numberOfCols = 2;
  }

  ngOnInit(): void {
    this.fetchAllProducts();
    this.responsive.observe([
      '(max-width: 365px)', '(max-width: 684px)', '(max-width: 996px)'
    ]).subscribe(
      result => {
        const breakpoints = result.breakpoints;

        if (breakpoints['(max-width: 365px)']) {
          this.numberOfCols = 1;
        } else if (breakpoints['(max-width: 684px)']) {
          this.numberOfCols = 2;
        } else if (breakpoints['(max-width: 996px)']) {
          this.numberOfCols = 3;
        } else {
          this.numberOfCols = 4;
        }
      }
    );

  }

  fetchAllProducts(): void {
    this.produtoService.listar().subscribe(
      products => this.productsInfo = products);
  }

  addProductToCart(product: Produto): void {
    this.shoppingCartService.insertProductsIntoCart(product);
  }

  searchProductByName(name: string): void {
    this.produtoService.pesquisarPorNome(name).subscribe(
      produtos => {
        if (produtos.length > 0) {
          this.productsInfo = produtos;
        }
      });
  }

  listCategorias(): string[] {
    return this.categoriasService.listar();
  }

  filtrarProdutosPorCategoria(categoria: string): void {
    this.produtoService.pesquisarPorCategoria(categoria).subscribe(
      produtosFiltrados => this.productsInfo = produtosFiltrados
    );
  }
}
