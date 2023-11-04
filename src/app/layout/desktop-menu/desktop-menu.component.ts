import { Component } from '@angular/core';
import { CategoriasService } from 'src/app/shared/services/categorias.service';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss']
})
export class DesktopMenuComponent {
  
  categorias: string[] = this.categoriasService.listar();

  constructor(private categoriasService: CategoriasService) { }
}
