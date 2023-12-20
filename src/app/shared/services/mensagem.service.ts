import { Injectable } from '@angular/core';
import {IMensagem} from "../model/imensagem";

@Injectable({
  providedIn: 'root'
})
export class MensagemService extends IMensagem {

  constructor() {
    super();
  }

  sucesso(mensagem: string): void {
    alert('Sucesso:' + mensagem);
  }

  erro(mensagem: string): void {
    alert('Erro:' + mensagem);
  }

  info(mensagem: string): void {
    alert('Info:' + mensagem);
  }

  alerta(mensagem: string): void {
    alert('Alerta:' + mensagem);
  }
}
