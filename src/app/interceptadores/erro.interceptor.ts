import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import { IMensagem } from '../shared/model/imensagem';
import { MensagemSweetService } from '../shared/services/mensagem-sweet.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private mensagemService: MensagemSweetService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(resposta => this.trataRespostaErro(resposta)));
  }

  trataRespostaErro(erro: HttpErrorResponse): Observable<HttpEvent<any>> {
    if (erro instanceof HttpErrorResponse){
      console.log('Erro:' + erro.message);
      this.mensagemService.erro('Erro:' + erro.message);
    }

    return throwError(() => erro);
  }

}
