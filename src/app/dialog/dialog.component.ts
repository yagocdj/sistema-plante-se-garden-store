import { ProdutoService } from './../shared/services/produto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  produtoForm !: FormGroup;

  constructor(private formBuilder:FormBuilder, private produto: ProdutoService){

  }

  ngOnInit():void{
    this.produtoForm = this.formBuilder.group({
      nomeProduto : ['', Validators.required],
      categoriaProduto: ['', Validators.required],
      precoProduto: ['', Validators.required],
      quantidadeProduto : ['', Validators.required]
    })
  }

  produtoFormulario(){
    if (this.produtoForm.valid){
      this.produto.inserir(this.produtoForm.value).subscribe
      ({next:()=>{alert('Produto Adicionado com Sucesso!')
      }, error:()=>{alert('Preencha os campos.')}
    })
  }

}
}
