import { Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/shared/model/produto';

@Component({
  selector: 'app-pesquisa-produto',
  templateUrl: './pesquisa-produto.component.html',
  styleUrls: ['./pesquisa-produto.component.scss']
})
export class PesquisaProdutoComponent {
  produtos: Produto[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { produtos: Produto[] }) {
    this.produtos = data.produtos;
  }

}
