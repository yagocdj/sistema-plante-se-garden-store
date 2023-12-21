import { TestBed } from '@angular/core/testing';

import { MensagemSnackService } from './mensagem-snack.service';

describe('MensagemSnackService', () => {
  let service: MensagemSnackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagemSnackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
