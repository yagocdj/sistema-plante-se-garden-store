import { TestBed } from '@angular/core/testing';

import { ClienteFirestoreService } from './cliente-firestore.service';

describe('ClienteFirestoreService', () => {
  let service: ClienteFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
