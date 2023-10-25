import { Injectable } from '@angular/core';
import {Cliente} from "../model/cliente";
import {CLIENTES} from "../model/CLIENTES";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private _clientes: Array<Cliente>;
  constructor() {
    this._clientes = CLIENTES;
  }

  listar(): Array<Cliente> {
    return this._clientes;
  }

  inserir(cliente: Cliente): void {
    if (this.localizar(cliente.cpf) >= 0)
      throw new Error(`O cliente de CPF "${cliente.cpf}" já está cadastrado.`);
    this._clientes.push(cliente);
  }

  // TODO - revisar este método
  editar(cpf: string, novoCliente: Cliente): void {
    const indexClienteASerEditado = this.localizar(cpf);
    if (indexClienteASerEditado < 0)
      throw new Error(`Não foi localizado um cliente com o CPF "${cpf}".`);
    if (this.localizar(novoCliente.cpf) >= 0)
      throw new Error(`Já existe um cliente com o CPF ${novoCliente.cpf}`)
    this._clientes[indexClienteASerEditado] = new Cliente(
      novoCliente.nome,
      novoCliente.cpf,
      novoCliente.email,
      novoCliente.endereco,
      novoCliente.telefone,
      novoCliente.senha,
    )
  }

  localizar(cpf: string): number {
    return this._clientes.findIndex(
      (cliente: Cliente): boolean => cliente.cpf === cpf
    );
  }

  remover(cpf: string): void {
    const indexClienteASerRemovido = this.localizar(cpf);
    if (indexClienteASerRemovido < 0)
      throw new Error(`Não foi localizado um cliente com o CPF "${cpf}".`);
    this._clientes.splice(indexClienteASerRemovido, 1);
  }

}
