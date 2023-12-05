import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Pedido } from 'src/app/shared/model/pedido';
import { PedidoFirestoreService } from 'src/app/shared/services/firestore/pedido-firestore.service';


@Component({
  selector: 'app-listagem-pedido',
  templateUrl: './listagem-pedido.component.html',
  styleUrls: ['./listagem-pedido.component.scss']
})

export class ListagemPedidoComponent implements OnInit {
  titulo = "Área de Pedidos";
  clientes: Array<Pedido> = [];
  dataSource = new MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'Nome do Cliente', 'Valor do Pedido']


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private pedidoService: PedidoFirestoreService) {
  }

  ngOnInit(): void {
    this.pedidoService.listar().subscribe(
      {
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      })
  }

  //default
  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
