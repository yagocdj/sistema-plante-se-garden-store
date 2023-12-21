import { ProdutoService } from 'src/app/shared/services/produto.service';
import { Component,Inject  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarProdutoComponent } from '../cadastrar-produto/cadastrar-produto.component';
import { Produto } from 'src/app/shared/model/produto';
import { PesquisaProdutoComponent } from '../pesquisa-produto/pesquisa-produto.component';
import { MensagemSweetService } from 'src/app/shared/services/mensagem-sweet.service';

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

constructor(private dialog: MatDialog, private produtoService: ProdutoService, private mensagemService: MensagemSweetService) {
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
  if(this.nomePesquisado.length == 0){
    this.mensagemService.alerta('Digite algo para pesquisar!');}
    else{
      this.produtoService.pesquisarPorNome(this.nomePesquisado).subscribe((produtos: Produto[]) => {
      this.produtosPesquisados = produtos;
      console.log(produtos);
      this.abrirDialogPesquisa(produtos);
    });}

}

abrirDialogPesquisa(produtos: Produto[]): void {
  const dialogRef = this.dialog.open(PesquisaProdutoComponent, {
    width: '400px',
    data: { produtos: produtos }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('O dialog foi fechado', result);
  });
}
}
