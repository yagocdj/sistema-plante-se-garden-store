import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { ListagemProdutoComponent } from './produto/listagem-produto/listagem-produto.component';

const routes: Routes = [
  {path:'login-admin', component: LoginAdminComponent},
  {path:'listagem-produto', component: ListagemProdutoComponent}
  //{path:'**', redirectTo:'login-admin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
