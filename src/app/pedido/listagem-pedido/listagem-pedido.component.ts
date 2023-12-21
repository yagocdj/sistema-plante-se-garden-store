import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Pedido } from 'src/app/shared/model/pedido';
import { PedidoService } from 'src/app/shared/services/pedido.service';


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

  constructor(private pedidoService: PedidoService) {
  }

  ngOnInit(): void {
    this.pedidoService.list().subscribe(
      {
        next: (res: any) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.dataSource.filterPredicate = this.customFilterPredicate();
        }
      })
  }

  customFilterPredicate(): (data: any, filter: string) => boolean {
    const filterFunction = (data: any, filter: string): boolean => {
      const searchTerms = filter.toLowerCase().split(' ');

      // Verifica se algum termo da busca está presente no ID, nome do cliente ou valor do pedido
      return (
        data.id.toString().includes(searchTerms[0]) ||
        data.cliente?.nome.toLowerCase().includes(searchTerms[0]) ||
        data.valorTotal.toString().includes(searchTerms[0])
      );
    };

    return filterFunction;
  }

  //default
  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
