export class Admin {
  private _nome: string;
  private _senha: string; //senha a revisar

  constructor(nome:string, senha: string) {
    this._nome = nome;
    this._senha = senha;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(novoNome:string) {
    this._nome = novoNome;
  }

  get senha(): string {
    return this._senha;
  }

  set senha(novaSenha:string) {
    this._senha = novaSenha;
  }



}
