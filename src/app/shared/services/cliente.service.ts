import { Injectable } from '@angular/core';
import {Cliente} from "../model/cliente";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URL_CLIENTES = environment.URL_API + '/clientes';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.URL_CLIENTES);
  }

  inserir(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.URL_CLIENTES, cliente, this.httpOptions);
  }

  editar(cpf: string, cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(this.URL_CLIENTES, cliente, this.httpOptions);
  }

  localizar(cpf: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.URL_CLIENTES + '?cpf=' + cpf, this.httpOptions);
  }

  remover(cpf: string): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(this.URL_CLIENTES + '?cpf=' + cpf, this.httpOptions);
  }

}
