import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { PedidoModule } from 'src/app/pedido/pedido.module';
import { Pedido } from '../../model/pedido';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PedidoFirestoreService {


  costumersCollection: AngularFirestoreCollection<PedidoModule>;
  COLLECTION_NAME = 'pedidos';

  constructor(private afs: AngularFirestore) {
    this.costumersCollection = afs.collection(this.COLLECTION_NAME);
  }

  listar(): Observable<Pedido[]> {
    return this.afs.collection<Pedido>('pedidos').valueChanges({ idField: 'id' });
  }
}
