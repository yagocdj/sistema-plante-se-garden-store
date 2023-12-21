import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ClienteService} from "../../shared/services/cliente.service";
import {MensagemService} from "../../shared/services/mensagem.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent implements OnInit {

  public loginForm!: FormGroup
  emailForm = new FormControl();
  senhaForm = new FormControl();

  constructor(
    private clienteService: ClienteService,
    private mensagemService: MensagemService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.emailForm = new FormControl("", [
      Validators.email,
      Validators.required
    ]);
    this.senhaForm = new FormControl("", [
      Validators.minLength(5),
      Validators.maxLength(25),
      Validators.required
    ]);
    this.loginForm = new FormGroup({
      email: this.emailForm,
      senha: this.senhaForm
    })
  }

  autenticarCliente(): void {
    this.clienteService.localizarPorEmail(this.emailForm.value).subscribe(cliente => {
      if (cliente) {
        this.clienteService.autenticar(cliente.email, this.senhaForm.value).subscribe(ehValido => {
          if (ehValido) {
            localStorage.setItem("clienteAtual", cliente.id ? cliente.id.toString() : '');
            this.router.navigate(['/']).then(response => {
              this.mensagemService.sucesso('Login realizado com sucesso!');
            });
          } else {
            this.loginForm.controls['password'].setErrors({'incorrect': true});
            this.mensagemService.erro("Senha incorreta!");
          }
        });
      }
    });
  }
}
