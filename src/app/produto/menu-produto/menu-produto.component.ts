import { Component,Inject  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarProdutoComponent } from '../cadastrar-produto/cadastrar-produto.component';

@Component({
  selector: 'app-menu-produto',
  templateUrl: './menu-produto.component.html',
  styleUrls: ['./menu-produto.component.scss']
})
export class MenuProdutoComponent {

constructor(private dialog: MatDialog) {
}

openDialog() {
  this.dialog.open(CadastrarProdutoComponent, {
  });
}

refreshPage(){
  location.reload();
}

}
