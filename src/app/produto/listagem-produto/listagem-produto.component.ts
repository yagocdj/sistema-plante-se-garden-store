import { ProdutoService } from './../../shared/services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.scss']
})
export class ListagemProdutoComponent implements OnInit {

  produtos: Array<Produto> = [];
  titulo ='Área de Produtos'

constructor(private produtoService: ProdutoService){

}


ngOnInit(): void {
 this.produtoService.listar().subscribe(produtos => this.produtos = produtos);
}

excluirProduto(id:any): void {
  this.produtoService.remover(id).subscribe();
  console.log("produto removido com sucesso.")
  location.reload();
}
}
