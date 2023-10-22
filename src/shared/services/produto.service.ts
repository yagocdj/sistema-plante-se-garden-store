import { PRODUTOS } from './../model/produtos';
import { Produto } from './../model/produto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private _produtos: Array<Produto>;

  // URL_PRODUTOS = 'http://localhost:3000/produtos';
  //constructor(private httpClient:HttpClient){}
  constructor() {
    this._produtos = PRODUTOS;
   }

  listar():Array<Produto> {
    return this._produtos;
  }

  inserir(produto: Produto):void{
    //aqui precisa ter o tratamento de exceção
    this._produtos.push(produto);
  }

  localizar(){}

  remover(){}

  editar(){}
}
