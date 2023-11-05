import { Component, OnInit } from '@angular/core';
import { MediaService } from './shared/services/media.service';
import { ClienteService } from './shared/services/cliente.service';
import { Cliente } from './shared/model/cliente';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Olá, mundo!';
  private _isDesktop = false;
  private _mediaService: MediaService = new MediaService('(min-width: 1024px)');

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this._mediaService.match$.subscribe(value => this._isDesktop = value);
    this.testService();
  }

  get isDesktop(): boolean {
    return this._isDesktop;
  }

  set isDesktop(value: boolean) {
    this._isDesktop = value;
  }

  private testService(): void {
    console.log('Exibir todos os clientes:\n');
    this.clienteService.listar().subscribe(
      res => console.log(res)
    );

    const testCpf = '99900045419';
    console.log(`Exibir o cliente de CPF ${testCpf}:\n`);
    this.clienteService.localizar(testCpf).subscribe(
      res => console.log(res)
    );

    const updatedClient = new Cliente(
      'Marcela Barreto',
      '99900045419',
      'mkramer@gmail.com',
      'Rua Verde, 91',
      '929290101',
      'EstevaoFerreira2023');
    
    console.log('Atualizar um determinado cliente:\n');
    this.clienteService.editar(testCpf, updatedClient).subscribe();

    console.log('Cliente após a edição:\n');
    this.clienteService.localizar(testCpf).subscribe(
      res => console.log(res)
    );

    console.log('Remover o cliente de CPF ' + testCpf + ':\n');
    this.clienteService.remover(testCpf).subscribe();

    console.log('Listagem após a remoção:\n');
    this.clienteService.listar().subscribe(
      res => console.log(res)
    );
  }
}
