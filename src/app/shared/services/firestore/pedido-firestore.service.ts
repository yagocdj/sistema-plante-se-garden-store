import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, from, map } from 'rxjs';
import { Pedido } from '../../model/pedido';

@Injectable({
  providedIn: 'root'
})

export class PedidoFirestoreService {

  purchasesCollection: AngularFirestoreCollection<Pedido>;
  COLLECTION_NAME = 'pedidos';

  constructor(private afs: AngularFirestore) {
    this.purchasesCollection = afs.collection(this.COLLECTION_NAME);
  }

  listar(): Observable<Pedido[]> {
    return this.purchasesCollection.valueChanges({ idField: 'id' });
  }

  inserir(pedido: Pedido): Observable<DocumentReference<Pedido>> {
    delete pedido.id;
    return from(this.purchasesCollection.add({ ...pedido }));
  }

  remover(id: string): Observable<any> {
    return from(this.purchasesCollection.doc(id).delete());
  }

  // pesquisarPorId(id: string): Observable<Pedido> {
  //   return this.purchasesCollection.doc(id).get().pipe(map(document =>
  //     new Pedido(id, document.data())));
  // }

  editar(pedido: Pedido): Observable<void> {
    const id = pedido.id;
    delete pedido.id;
    return from(this.purchasesCollection.doc(id).update({ ...pedido }));
  }
}
