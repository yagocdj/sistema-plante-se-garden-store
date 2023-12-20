import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {IMensagem} from "../model/imensagem";

@Injectable({
  providedIn: 'root'
})
export class MensagemSnackService extends IMensagem {

  constructor(private snackBar: MatSnackBar) {
    super();
  }

  sucesso(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['success']);
  }

  erro(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['error']);
  }

  info(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['info']);
  }

  alerta(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['warning']);
  }

  private abrirSnackBar(mensagem: string, extraClasses: string[]): void {
    const config = new MatSnackBarConfig();
    config.politeness= 'assertive';
    config.duration = 5000;
    config.panelClass = extraClasses;
    this.snackBar.open(mensagem, 'X', config);
  }

}
