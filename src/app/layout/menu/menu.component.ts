import { Component } from '@angular/core';
import { CategoriasService } from 'src/app/shared/services/categorias.service';

@Component({
  selector: 'mobile-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  categorias: string[] = this.categoriasService.listar();

  constructor(private categoriasService: CategoriasService) { }
}
