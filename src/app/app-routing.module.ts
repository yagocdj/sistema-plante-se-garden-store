import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { ListagemProdutoComponent } from './produto/listagem-produto/listagem-produto.component';
import { CadastrarProdutoComponent } from './produto/cadastrar-produto/cadastrar-produto.component';
import { AdminMenuComponent } from './layout/admin-menu/admin-menu.component';

const routes: Routes = [
  {path:'login-admin', component: LoginAdminComponent},
  {path:'listagem-produto', component: ListagemProdutoComponent},
  {path:'cadastrar-produto', component: CadastrarProdutoComponent},
  {path:'admin-menu', component:AdminMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
