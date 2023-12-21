import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  readonly viacepApiUrl = 'https://viacep.com.br/ws/';
  readonly ibgeApiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';
  readonly ufs = [
    'pb', 'pe', 'al', 'ba', 'pi', 'ce', 'ma', 'rn', 'se',
    'ac', 'ap', 'pa', 'am', 'rr', 'ro',
    'mg', 'es', 'rj', 'sp', 'ms',
    'go', 'to', 'mt', 'df',
    'rs', 'sc', 'pr' 
  ]

  constructor(private httpClient: HttpClient) { }

  buscar(cep: string): Observable<any> {
    return this.httpClient.get<any>( `${this.viacepApiUrl}${cep}/json/`);
  }

  getCitiesByUF(uf: string): Observable<any> {
    return this.httpClient.get<any>(`${this.ibgeApiUrl}${uf}/municipios/`);
  }
}
