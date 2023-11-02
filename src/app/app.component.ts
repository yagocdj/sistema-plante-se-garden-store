import { Component } from '@angular/core';
import { ClienteService } from './shared/services/cliente.service';
import { Cliente } from './shared/model/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Olá, mundo!';

  constructor(private clienteService: ClienteService) {
    console.log('\nListar todos os clientes:');
    console.log(this.clienteService.listar());

    const cpfDoCliente = '99900045419';
    console.log(`\nLocalizar a cliente de CPF '${cpfDoCliente}'`);
    const indexClienteLocalizado = this.clienteService.localizar(cpfDoCliente);
    const clienteLocalizado = this.clienteService.listar()[indexClienteLocalizado];
    
    console.log(clienteLocalizado);

    console.log('\nEditando as informações do cliente acima');
    this.clienteService.editar(cpfDoCliente, new Cliente(
      'Marcela Kramer',
      '12345678910',
      'zap@zap.com',
      'Rua Alguma Coisa, 123',
      '971711717',
      'password123'
    ));

    console.log('\nListagem após a edição');
    console.log(this.clienteService.listar());

    console.log('\nRemovendo o cliente editado');
    this.clienteService.remover('12345678910');

    console.log('\nListagem após a remoção');
    console.log(this.clienteService.listar());
  }
}
