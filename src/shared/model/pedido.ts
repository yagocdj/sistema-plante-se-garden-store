import { Produto } from "./produto";
import { Cliente } from "./cliente";

export class Pedido {
  private static ultimoId = 0;
  readonly cliente: Cliente;
  readonly produtos: Array<Produto>;
  private _valorTotal: number;

  readonly id: number;

  constructor(cliente: Cliente, produtos: Produto[]) {
    this.id = this.getProximoId();
    this.cliente = cliente;
    this.produtos = produtos;
    this._valorTotal = this.calcularValorTotal();
  }

  //id para 'fachada'
  private getProximoId(): number {
    Pedido.ultimoId++;
    return Pedido.ultimoId;
  }

  get valorTotal(): number {
      return this._valorTotal;
  }

  //método para serviço
  private calcularValorTotal(): number {
    let total = 0;
    for (const produto of this.produtos){
      total += produto.preco * produto.quantidade;
    }
  return total;
}

}
