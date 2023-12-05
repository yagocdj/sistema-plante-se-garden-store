import { ProdutoService } from '../../shared/services/rest/produto.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from 'src/app/shared/model/produto';
import { EditarProdutoComponent } from '../editar-produto/editar-produto.component';
import { ProdutoFirestoreService } from 'src/app/shared/services/firestore/produto-firestore.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.scss']
})
export class ListagemProdutoComponent implements OnInit {

  produtos: Array<Produto> = [];
  titulo ='Área de Produtos'
  numberOfCols: number;
  produto!: Produto;

constructor(private produtoService: ProdutoFirestoreService, private dialog: MatDialog){
  this.numberOfCols = 4;
}


ngOnInit(): void {
 this.produtoService.listar().subscribe(produtos => this.produtos = produtos);

}

openEditar(produto:Produto) {
  this.dialog.open(EditarProdutoComponent, {
    width: '16%',
    data: produto
  });
}
excluirProduto(id:any): void {
  this.produtoService.remover(id).subscribe();
  console.log("produto removido com sucesso.")
  location.reload();
}
}
