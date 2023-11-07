import { Router } from '@angular/router';
import { ProdutoService } from './../shared/services/produto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  [x: string]: any;
  produtoForm !: FormGroup;

  constructor(private formBuilder:FormBuilder,  private produto: ProdutoService, private router: Router){

  }

  ngOnInit():void{
    this.produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required]
    })
  }

  produtoFormulario(){
    if (this.produtoForm.valid){
      this.produto.inserir(this.produtoForm.value).subscribe();
      console.log('adicionou com sucesso!');
      location.reload(); //utilizado para dar um refresh e atualizar a lista de produtos
  }

}
}
