import { Produto } from "./produto";
import { Cliente } from "./cliente";

export class Pedido {
  readonly cliente: Cliente;
  readonly produtos: Array<Produto>;
  private _valorTotal: number;

  constructor(
    cliente: Cliente, produtos: Produto[],
    private _id: number
  ) {
    this.cliente = cliente;
    this.produtos = produtos;
    this._valorTotal = this.calcularValorTotal();
  }

  get valorTotal(): number {
      return this._valorTotal;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
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
