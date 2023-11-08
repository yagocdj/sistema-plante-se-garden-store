import { switchMap } from 'rxjs/operators';
import { Produto } from './../model/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  readonly URL_PRODUTOS = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.URL_PRODUTOS}`)
  }

  inserir(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.URL_PRODUTOS}`, produto);
  }

  localizar(nomeProduto: string): Observable<number> {
    return this.http.get<number>(`${this.URL_PRODUTOS}/localizar/${nomeProduto}`);
  }

  remover(nomeProduto: string): Observable<void> {
    return this.localizar(nomeProduto).pipe(
      switchMap(id => this.http.delete<void>(`${this.URL_PRODUTOS}/${id}`))
    );
  }
  remover2(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL_PRODUTOS}/${id}`);
  }

  editar(idproduto:number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.URL_PRODUTOS}/${idproduto}`, produto);
  }
}



// import { PRODUTOS } from './../model/PRODUTOS';
// import { Produto } from './../model/produto';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProdutoService {

//   private _produtos: Array<Produto>;

//   constructor() {
//     this._produtos = PRODUTOS;
//    }

//   listar():Array<Produto> {
//     return this._produtos;
//   }

//   inserir(produto: Produto):void{
//     if (this.localizar(produto.nome))
//       throw new Error('O produto já cadastrado.')
//       this._produtos.push(produto);
//   }

//   localizar(nomeProduto: string): number{
//     const indiceARemover = this._produtos.findIndex((produto: Produto): boolean =>
//     produto.nome === nomeProduto);
//     return indiceARemover;
//   }

//   remover(produto: Produto): void{
//     const idxProdutoARemover = this.localizar(produto.nome);
//     if (idxProdutoARemover < 0)
//       throw new Error('Nome do Produto não encontrado, tente outro.');
//     this._produtos.splice(idxProdutoARemover,1);

//   }

//   editar(produto: Produto): void{
//     const idxProdutoAEditar = this.localizar(produto.nome);
//     if (idxProdutoAEditar < 0)
//       throw new Error('Nome do Produto não encontrado, tente outro.');
//     this._produtos[idxProdutoAEditar] = produto;

//   }
// }
