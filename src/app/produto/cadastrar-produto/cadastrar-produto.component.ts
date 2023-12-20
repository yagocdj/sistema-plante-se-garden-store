import { Router } from '@angular/router';
import { ProdutoService } from '../../shared/services/produto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MensagemService } from 'src/app/shared/services/mensagem.service';
import { MensagemSnackService } from 'src/app/shared/services/mensagem-snack.service';
import { MensagemSweetService } from 'src/app/shared/services/mensagem-sweet.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})

export class CadastrarProdutoComponent {

  produtoForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private mensagemService: MensagemSweetService
  ) { }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
      urlDaImagem: ['', Validators.required]
    });
  }

  cadastrarProduto() {
    if (this.produtoForm.valid) {
      this.produtoService.inserir(this.produtoForm.value).subscribe(() => {
        console.log('adicionou com sucesso!');
        this.mensagemService.sucesso('Produto cadastrado!');
      });
    } else {
      this.mensagemService.erro('Produto não cadastrado!');
    }
  }
}
