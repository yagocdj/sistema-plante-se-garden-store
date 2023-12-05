export class Produto {
  public id?: string;
  public nome?: string;
  public preco?: number;
  public categoria?: string;
  public quantidade?: number;
  public imageUrl?: string;

  constructor(
    id?: string, product: Produto = {}
  ) {
    this.nome = product.nome;
    this.preco = product.preco;
    this.categoria = product.categoria;
    this.quantidade = product.quantidade;
    this.imageUrl = product.imageUrl;
  }
}
