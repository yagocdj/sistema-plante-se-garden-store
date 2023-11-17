import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent {

  produtoForm !: FormGroup;

  constructor(private formBuilder:FormBuilder,  private produto: ProdutoService,
    @Inject (MAT_DIALOG_DATA) public produtoEditado : any){

  }

  ngOnInit():void{
    this.produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });

    if(this.produtoEditado){
      this.produtoForm.controls['nome'].setValue(this.produtoEditado.nome);
      this.produtoForm.controls['categoria'].setValue(this.produtoEditado.categoria);
      this.produtoForm.controls['preco'].setValue(this.produtoEditado.preco);
      this.produtoForm.controls['quantidade'].setValue(this.produtoEditado.quantidade);
      this.produtoForm.controls['imageUrl'].setValue(this.produtoEditado.imageUrl);
    }
    console.log(this.produtoEditado);
  }

  produtoEditar(){
    if (this.produtoForm.valid){
      this.produto.editar(this.produtoEditado.id, this.produtoForm.value).subscribe();
      console.log('adicionou com sucesso!');
      location.reload(); //utilizado para dar um refresh e atualizar a lista de produtos
  }

}
}

