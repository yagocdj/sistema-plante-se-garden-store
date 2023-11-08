import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
    private responsive: BreakpointObserver
  ) {
    this.productsInfo = []
    this.numberOfCols = 2;
  }

  ngOnInit(): void {
    this.fetchAllProducts();
    this.responsive.observe([
      '(max-width: 695px)', '(max-width: 954px)'
    ]).subscribe(
      result => {
        const breakpoints = result.breakpoints;
        
        if (breakpoints['(max-width: 695px)']) {
          this.numberOfCols = 2;
        } else if (breakpoints['(max-width: 954px)']) {
          this.numberOfCols = 3;
        } else {
          this.numberOfCols = 4;
        }
      }
    );
    
  }

  fetchAllProducts(): void {
    this.produtoService.listar().subscribe(
      products => products.forEach(
        p => this.productsInfo.push(p)
      )
    );
  }
  
}
