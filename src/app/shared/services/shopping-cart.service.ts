import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _shoppingCart: Produto[] = [];
  private _productsCount: number = 0;

  constructor() { }

  insertProductsIntoCart(productToBeInserted: Produto): void {
    const productIndex = this.searchForIndex(productToBeInserted.id!);
    if (productIndex < 0) {
      this._shoppingCart.push(productToBeInserted);
    } else {
      this._shoppingCart[productIndex].quantidade!++;
    }
    this._productsCount = this._shoppingCart.length;
  }

  removeProductFromCart(productId: string): void {
    const productIndex = this.searchForIndex(productId);
    if (productIndex < 0) {
      throw new Error(`There is no product with ID ${productId} into the cart.`);
    }
    this._shoppingCart.splice(productIndex, 1);
    this._productsCount = this._shoppingCart.length;
  }

  getTotalValue(): number {
    return this._shoppingCart.reduce(
      (accumulator, product) => accumulator + product.preco! * product.quantidade!, 0);
  }

  get shoppingCart(): Produto[] {
    return this._shoppingCart;
  }

  set shoppingCart(value: Produto[]) {
    this._shoppingCart = value;
  }

  get productsCount(): number {
    return this._productsCount;
  }
  set productsCount(value: number) {
    this._productsCount = value;
  }

  private searchForIndex(productId: string): number {
    return this._shoppingCart.findIndex(
      product => product.id === productId);
  }
}
