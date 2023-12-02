import { TestBed } from '@angular/core/testing';

import { ProdutoFirestoreService } from './produto-firestore.service';

describe('ProdutoFirestoreService', () => {
  let service: ProdutoFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
