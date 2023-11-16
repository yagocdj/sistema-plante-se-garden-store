import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _shoppingCart: Produto[] = [];

  constructor() { }

  insertProductsIntoCart(productToBeInserted: Produto): void {
    const productIndex = this.searchForIndex(productToBeInserted.id!);
    if (productIndex < 0) {
      this._shoppingCart.push(productToBeInserted);
    } else {
      this._shoppingCart[productIndex].quantidade += productToBeInserted.quantidade;
    }
  }

  removeProductFromCart(productId: number): void {
    const productIndex = this.searchForIndex(productId);
    if (productIndex < 0) {
      throw new Error(`There is no product with ID ${productId} into the cart.`);
    }
    this._shoppingCart.splice(productIndex, 1);
  }

  getTotalValue(): number {
    return this._shoppingCart.reduce(
      (accumulator, product) => accumulator + product.preco, 0);
  }

  get shoppingCart(): Produto[] {
    return this._shoppingCart;
  }

  set shoppingCart(value: Produto[]) {
    this._shoppingCart = value;
  }

  private searchForIndex(productId: number): number {
    return this._shoppingCart.findIndex(
      product => product.id === productId);
  }
}
