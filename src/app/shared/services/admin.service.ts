import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private URL_ADMIN = environment.URL_API + '/administradores';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.URL_ADMIN);
  }
}
