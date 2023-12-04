import { Pedido } from "./pedido";

export class Cliente {
  public nome?: string;
  public cpf?: string;
  public email?: string;
  public endereco?: string;
  public telefone?: string;
  public senha?: string;
  public id?: string;

  constructor(id?: string, costumer: Cliente = {}) {
    this.nome = costumer.nome;
    this.cpf = costumer.cpf;
    this.email = costumer.email;
    this.endereco = costumer.endereco;
    this.telefone = costumer.telefone;
    this.senha = costumer.senha;
  }
}
