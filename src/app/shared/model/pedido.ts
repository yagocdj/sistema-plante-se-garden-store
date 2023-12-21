import { Produto } from "./produto";
import { Cliente } from "./cliente";

export class Pedido {
  readonly cliente: Cliente;
  readonly produtos: Array<Produto>;
  private _valorTotal: number;
  private _id: number | null = null;

  constructor(
    cliente: Cliente, produtos: Produto[],
  ) {
    this.cliente = cliente;
    this.produtos = produtos;
    this._valorTotal = 0;
  }

  get valorTotal(): number {
    return this._valorTotal;
  }

  set valorTotal(value: number) {
    this._valorTotal = value;
  }

  get id(): number | null {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  //método para serviço
  // private calcularValorTotal(): number {
  //   let total = 0;
  //   for (const produto of this.produtos) {
  //     total += produto.preco * produto.quantidade;
  //   }
  //   return total;
  // }

}
