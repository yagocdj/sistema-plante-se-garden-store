import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';
import { Cliente } from '../model/cliente';
import { Produto } from '../model/produto';
import { ClienteService } from './cliente.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private _pedidos: Pedido[];
  constructor() {
    this._pedidos = new Array<Pedido>();
  }

  listar(): Pedido[] {
    return Array.from(this._pedidos);
  }

  inserir(cliente: Cliente, produtos: Produto[]): void {
    if (produtos.length === 0) {
      throw new Error('O pedido deve conter ao menos um produto.');
    }

    this._pedidos.push(new Pedido(cliente, produtos));
  }

  localizar(id: number): number {
    return this._pedidos.findIndex(pedido => pedido.id === id);
  }

  getPedido(id: number): Pedido | undefined {
    const indexPedido = this.localizar(id);
    if (indexPedido < 0) {
      return;
    }
  
    return this._pedidos[indexPedido];
  }

  remover(id: number): void {
    const indexPedidoASerRemovido = this.localizar(id);
    
    if (indexPedidoASerRemovido < 0) {
      throw new Error(`Não há pedido cujo ID é ${id}.`);
    }
    
    const pedidoASerRemovido = this._pedidos[indexPedidoASerRemovido];
    
    const cliente = pedidoASerRemovido.cliente;
    const indexPedidoNoCliente = cliente.localizar(id);

    if (indexPedidoNoCliente < 0) {
      throw new Error(
        `O cliente de CPF ${cliente.cpf} não possui o pedido de ID ${id}.`);
    }

    cliente.pedidos.splice(indexPedidoNoCliente, 1);
    this._pedidos.splice(indexPedidoASerRemovido, 1);
  }
}
