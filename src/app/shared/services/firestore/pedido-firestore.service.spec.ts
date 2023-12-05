import { TestBed } from '@angular/core/testing';

import { PedidoFirestoreService } from './pedido-firestore.service';

describe('PedidoFirestoreService', () => {
  let service: PedidoFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
