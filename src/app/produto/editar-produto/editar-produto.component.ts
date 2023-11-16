import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent {

  produtoForm !: FormGroup;

  constructor(private formBuilder:FormBuilder,  private produto: ProdutoService){

  }

  ngOnInit():void{
    this.produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
      imageUrl: ['', Validators.required]
    })
  }

  produtoEditar(){
    if (this.produtoForm.valid){
      this.produto.inserir(this.produtoForm.value).subscribe();
      console.log('adicionou com sucesso!');
      location.reload(); //utilizado para dar um refresh e atualizar a lista de produtos
  }

}
}

