export class Produto {
  private _nome: string;
  private _preco: number;
  private _categoria: string;
  private _quantidade: number;

  //Adicionar ID autoincremental futuramente
  constructor(
    nome: string, preco: number, categoria: string,
    quantidade: number = 0, private _id: number
  ) {
    this._nome = nome;
    this._preco = preco;
    this._categoria = categoria;
    this._quantidade = quantidade;
  }


  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get preco(): number {
    return this._preco;
  }

  set preco(value: number) {
    this._preco = value;
  }

  get categoria(): string {
    return this._categoria;
  }

  set categoria(value: string) {
    this._categoria = value;
  }

  get quantidade(): number {
    return this._quantidade;
  }
  
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
