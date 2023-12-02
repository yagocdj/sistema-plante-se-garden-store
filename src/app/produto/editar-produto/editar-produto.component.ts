import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutoFirestoreService } from 'src/app/shared/services/firestore/produto-firestore.service';
import { ProdutoService } from 'src/app/shared/services/rest/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent {

  produtoForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoFirestoreService,
    @Inject(MAT_DIALOG_DATA) public produtoEditado: any
  ) { }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });

    if (this.produtoEditado) {
      this.produtoForm.controls['nome'].setValue(this.produtoEditado.nome);
      this.produtoForm.controls['categoria'].setValue(this.produtoEditado.categoria);
      this.produtoForm.controls['preco'].setValue(this.produtoEditado.preco);
      this.produtoForm.controls['quantidade'].setValue(this.produtoEditado.quantidade);
      this.produtoForm.controls['imageUrl'].setValue(this.produtoEditado.imageUrl);
    }
    console.log(this.produtoEditado);
  }

  editarProduto() {
    if (this.produtoForm.valid) {
      // Para usar o REST service, descomente a linha de código abaixo
      // this.produtoService.editar(this.produtoEditado.id, this.produtoForm.value).subscribe();
      this.produtoService.editar(this.produtoEditado).subscribe();
      console.log('adicionou com sucesso!');
      location.reload(); //utilizado para dar um refresh e atualizar a lista de produtos
    }

  }
}

