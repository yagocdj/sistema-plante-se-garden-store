import { HttpClient } from '@angular/common/http';
import { ProdutoService } from './../../shared/services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/shared/model/produto';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.scss']
})
export class ListagemProdutoComponent implements OnInit {

  produtos: Array<Produto> = [];


constructor(private produtoService: ProdutoService){
}


ngOnInit(): void {
 this.produtoService.listar().subscribe(produtos => this.produtos = produtos);
}

excluirProduto(id:number): void {
  this.produtoService.remover2(id).subscribe({next:(res) => {
    console.log('Produto excluído com sucesso')},
    error:()=>{console.log('Produto excluído sem sucesso')}
  });
  location.reload();
}
}
