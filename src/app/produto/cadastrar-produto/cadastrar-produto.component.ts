import { Router } from '@angular/router';
import { ProdutoService } from '../../shared/services/rest/produto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ProdutoFirestoreService } from 'src/app/shared/services/firestore/produto-firestore.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})

export class CadastrarProdutoComponent {

  produtoForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoFirestoreService
  ) { }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
      imageUrl: ['', Validators.required]
    })
  }

  cadastrarProduto() {
    if (this.produtoForm.valid) {
      this.produtoService.inserir(this.produtoForm.value).subscribe();
      console.log('adicionou com sucesso!');
      location.reload(); // utilizado para dar um refresh e atualizar a lista de produtos
    }

  }
}
