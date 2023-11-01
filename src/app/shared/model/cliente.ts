import { Pedido } from "./pedido";

export class Cliente {
  private _nome: string;
  private _cpf: string;
  private _email: string;
  private _endereco: string;
  private _telefone: string;
  private _senha: string; // senha a revisar
  private _pedidos: Pedido[];

  constructor(nome: string, cpf: string, email: string,
              endereco: string, telefone: string, senha: string) {
    this._nome = nome;
    this._cpf = cpf;
    this._email = email;
    this._endereco = endereco;
    this._telefone = telefone;
    this._senha = senha;
    this._pedidos = [];
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get endereco(): string {
    return this._endereco;
  }

  set endereco(value: string) {
    this._endereco = value;
  }

  get telefone(): string {
    return this._telefone;
  }

  set telefone(value: string) {
    this._telefone = value;
  }

  get senha(): string {
    return this._senha;
  }

  set senha(value: string) {
    this._senha = value;
  }

  get pedidos(): Pedido[] {
    return this._pedidos;
  }

  localizar(id: number): number {
    return this._pedidos.findIndex(pesagem => pesagem.id === id);
  }
}
