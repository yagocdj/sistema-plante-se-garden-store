import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private _categorias: string[];
  constructor() {
    this._categorias = ['Fertilizantes',
      'Ferramentas', 'Mudas', 'Sementes', 'Acessórios', 'Bancos para jardim', 'Vasos de plantas'];
  }

  listar(): string[] {
    return this._categorias;
  }
}
