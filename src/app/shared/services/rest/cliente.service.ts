import { Injectable } from '@angular/core';
import {Cliente} from "../../model/cliente";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly apiUrl = 'http://localhost:3000/clientes';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.apiUrl);
  }

  inserir(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.apiUrl, cliente, this.httpOptions);
  }

  editar(cpf: string, cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(this.apiUrl, cliente, this.httpOptions);
  }

  localizar(cpf: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.apiUrl + '?cpf=' + cpf, this.httpOptions);
  }

  remover(cpf: string): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(this.apiUrl + '?cpf=' + cpf, this.httpOptions);
  }

}
