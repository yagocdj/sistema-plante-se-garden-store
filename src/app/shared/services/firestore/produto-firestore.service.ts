import { Injectable } from '@angular/core';
import { from, Observable, map } from 'rxjs';
import { Produto } from '../../model/produto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProdutoFirestoreService {

  productsCollection: AngularFirestoreCollection<Produto>;
  COLLECTION_NAME = 'produtos';

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection(this.COLLECTION_NAME);
  }

  listar(): Observable<Produto[]> {
    return this.productsCollection.valueChanges({ idField: 'id' });
  }

  inserir(product: Produto): Observable<Produto> {
    delete product.id;
    return from(this.productsCollection.add({ ...product }));
  }

  remover(id: string): Observable<any> {
    return from(this.productsCollection.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Produto> {
    return this.productsCollection.doc(id).get().pipe(map(document =>
      new Produto(id, document.data())));
  }

  editar(product: Produto): Observable<void> {
    const id = product.id;
    delete product.id;
    return from(this.productsCollection.doc(id).update({ ...product }));
  }
}
