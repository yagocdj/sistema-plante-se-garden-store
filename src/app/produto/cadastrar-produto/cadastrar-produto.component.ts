import { PRODUTOS } from '../../shared/model/PRODUTOS';
import { Component,Inject  } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import {ActivatedRoute, Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';


@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent {
  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
    });
  }
}
