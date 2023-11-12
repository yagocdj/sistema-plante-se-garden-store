import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ListagemClienteComponent } from './cliente/listagem-cliente/listagem-cliente.component';

const routes: Routes = [
  {path:'login-admin', component: LoginAdminComponent},
  {path: 'cadastro-cliente', component: CadastroClienteComponent},
  // {path: '**', redirectTo: 'cadastro-cliente'}
  // {path:'**', redirectTo:'login-admin'}
  {path: 'listagem-cliente', component: ListagemClienteComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
