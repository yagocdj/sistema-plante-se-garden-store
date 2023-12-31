export class Produto {
  private _id: number | undefined;
  private _nome: string;
  private _preco: number;
  private _categoria: string;
  private _quantidade: number;
  private _urlDaImagem: string;

  constructor(
    nome: string, preco: number, categoria: string,
    quantidade: number = 0, urlDaImagem: string = ''
  ) {
    this._nome = nome;
    this._preco = preco;
    this._categoria = categoria;
    this._quantidade = quantidade;
    this._urlDaImagem = urlDaImagem
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

  set quantidade(value: number) {
    this._quantidade = value;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get urlDaImagem(): string {
    return this._urlDaImagem;
  }
  set urlDaImagem(value: string) {
    this._urlDaImagem = value;
  }

}
