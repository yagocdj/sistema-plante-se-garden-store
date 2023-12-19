import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nome: [''],
      senha: ['']
    })
  }

  // acessar():void{
  //   this.http.get<any>(environment.URL_API + '/administradores').subscribe(res=>{
  //     const usuario = res.find((a:any)=>{
  //       return a.nome === this.loginForm.value.nome && a.senha === this.loginForm.value.senha
  //     });
  //     if(usuario){
  //       alert("Login efetuado com sucesso!");
  //       this.loginForm.reset;
  //       this.router.navigate(['/admin-menu']);
  //     } else{
  //       alert("Usuário incorreto!");
  //     }
  //   })
  // }

  acessar(): void {
    this.adminService.listar().subscribe(
      admins => {
        const admin = admins.find(
          a => a.nome === this.loginForm.value.nome && a.senha === this.loginForm.value.senha
        );
        if (admin) {
          alert("Login efetuado com sucesso!");
          this.loginForm.reset;
          this.router.navigate(['/admin-menu']);
        } else {
          alert("Usuário incorreto!");
        }
      }
    );
  }
}
