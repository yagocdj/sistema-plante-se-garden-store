import { Injectable } from '@angular/core';
import { from, Observable, map } from 'rxjs';
import { Produto } from '../../model/produto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Cliente } from '../../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteFirestoreService {

  costumersCollection: AngularFirestoreCollection<Cliente>;
  COLLECTION_NAME = 'clientes';

  constructor(private afs: AngularFirestore) {
    this.costumersCollection = afs.collection(this.COLLECTION_NAME);
  }

  listar(): Observable<Cliente[]> {
    return this.costumersCollection.valueChanges({ idField: 'id' });
  }

  inserir(costumer: Cliente): Observable<Cliente> {
    delete costumer.id;
    return from(this.costumersCollection.add({ ...costumer }));
  }

  remover(id: string): Observable<any> {
    return from(this.costumersCollection.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Cliente> {
    return this.costumersCollection.doc(id).get().pipe(map(document =>
      new Cliente(id, document.data())));
  }

  editar(costumer: Cliente): Observable<void> {
    const id = costumer.id;
    delete costumer.id;
    return from(this.costumersCollection.doc(id).update({ ...costumer }));
  }
}
