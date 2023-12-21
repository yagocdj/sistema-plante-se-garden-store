import { ProdutoService } from 'src/app/shared/services/produto.service';
import { Component,Inject  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarProdutoComponent } from '../cadastrar-produto/cadastrar-produto.component';
import { Produto } from 'src/app/shared/model/produto';

@Component({
  selector: 'app-menu-produto',
  templateUrl: './menu-produto.component.html',
  styleUrls: ['./menu-produto.component.scss']
})
export class MenuProdutoComponent {
  produtos: Produto[] = [];
  produtosPesquisa: Array<Produto> = [];
  nomePesquisado: string = '';
  produtosPesquisados: Produto[] = [];

constructor(private dialog: MatDialog, private produtoService: ProdutoService) {
}

openDialog() {
  this.dialog.open(CadastrarProdutoComponent, {
    width:'16%'
  });

}

refreshPage(){
  location.reload();
}

pesquisar() {
  this.produtoService.pesquisarPorNome(this.nomePesquisado).subscribe((produtos: Produto[]) => {
    this.produtosPesquisados = produtos;
    console.log(produtos);
  });
}
}
