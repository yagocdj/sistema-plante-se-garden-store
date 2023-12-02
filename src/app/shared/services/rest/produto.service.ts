import { switchMap } from 'rxjs/operators';
import { Produto } from '../../model/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private URL_PRODUTOS = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.URL_PRODUTOS}`);
  }

  inserir(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.URL_PRODUTOS}`, produto);
  }

  localizar(id: number): Observable<number> {
    return this.http.get<number>(`${this.URL_PRODUTOS}/produtos/${id}`);
  }

  remover(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL_PRODUTOS}/${id}`);
  }

  editar(idproduto: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.URL_PRODUTOS}/${idproduto}`, produto);
  }
}
