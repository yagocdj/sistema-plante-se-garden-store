import { ClienteService } from 'src/app/shared/services/rest/cliente.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/shared/model/cliente';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ClienteFirestoreService } from 'src/app/shared/services/firestore/cliente-firestore.service';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.scss']
})

export class ListagemClienteComponent implements OnInit {
  titulo = "Área de Clientes";
  clientes: Array<Cliente> = [];
  dataSource = new MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'Nome', 'CPF', 'Email', 'Telefone']


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private clienteService: ClienteFirestoreService) {
  }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(
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
