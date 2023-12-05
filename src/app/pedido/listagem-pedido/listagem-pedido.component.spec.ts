import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPedidoComponent } from './listagem-pedido.component';

describe('ListagemPedidoComponent', () => {
  let component: ListagemPedidoComponent;
  let fixture: ComponentFixture<ListagemPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemPedidoComponent]
    });
    fixture = TestBed.createComponent(ListagemPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
