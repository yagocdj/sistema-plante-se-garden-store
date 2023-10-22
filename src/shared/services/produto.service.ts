import { PRODUTOS } from './../model/produtos';
import { Produto } from './../model/produto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private _produtos: Array<Produto>;

  //Utilizando json server importará HttpClient
  //URL_PRODUTOS = 'http://localhost:3000/produtos';
  //constructor(private httpClient:HttpClient){}
  constructor() {
    this._produtos = PRODUTOS;
   }

  listar():Array<Produto> {
    return this._produtos;
  }

  inserir(produto: Produto):void{
    if (this.localizar(produto.nome))
      throw new Error('O produto já cadastrado.')
      this._produtos.push(produto);
  }

  localizar(nomeProduto: string): number{
    const indiceARemover = this._produtos.findIndex((produto: Produto): boolean =>
    produto.nome === nomeProduto);
    return indiceARemover;
  }

  remover(produto: Produto): void{
    const idxProdutoARemover = this.localizar(produto.nome);
    if (idxProdutoARemover < 0)
      throw new Error('Nome do Produto não encontrado, tente outro.');
    this._produtos.splice(idxProdutoARemover,1);

  }

 //precisa melhorar como os parâmetros serão passados
  editar(produto: Produto): void{
    const idxProdutoAEditar = this.localizar(produto.nome);
    if (idxProdutoAEditar < 0)
      throw new Error('Nome do Produto não encontrado, tente outro.');
    this._produtos[idxProdutoAEditar] = produto;

  }
}
