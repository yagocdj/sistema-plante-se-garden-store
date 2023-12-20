import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
import { MensagemSweetService } from 'src/app/shared/services/mensagem-sweet.service';
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
    private router: Router,
    private mensagemService: MensagemSweetService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nome: [''],
      senha: ['']
    })
  }

  acessar(): void {
    this.adminService.listar().subscribe(
      admins => {
        const admin = admins.find(
          a => a.nome === this.loginForm.value.nome && a.senha === this.loginForm.value.senha
        );
        if (admin) {
          this.mensagemService.sucesso('Login Efetuado com Sucesso!');
          this.loginForm.reset;
          this.router.navigate(['/admin-menu']);
        } else {
          this.mensagemService.erro('Login/Senha Incorreto!');
        }
      }
    );
  }
}
