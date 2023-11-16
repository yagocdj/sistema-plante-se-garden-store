import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Cliente } from 'src/app/shared/model/cliente';
import { CepService } from 'src/app/shared/services/cep.service';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {
  // ! -> non-null assertion operator

  cadastroForm!: FormGroup;
  readonly requiredFieldErrorMessage = 'Este campo é obrigatório.';
  cities: string[] = [];

  constructor(
    private cepService: CepService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      nomeDaRua: new FormControl('', [Validators.required]),
      numeroResidencia: new FormControl('', [Validators.required]),
      uf: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    });
  }

  // FIXME - corrigir a questão da senha
  createAccount(): void {
    if (this.cadastroForm.valid) {
      const address = `${this.nomeDaRua?.value},${this.numeroResidencia?.value},${this.cidade?.value}-${this.uf?.value.toUpperCase()}`;

      this.clienteService.inserir({
        nome: this.nome?.value,
        cpf: this.cpf?.value,
        email: this.email?.value,
        endereco: address,
        telefone: this.telefone?.value,
        senha: this.senha?.value
      } as Cliente).subscribe();
    }
  }

  queryCep(event: any): void {
    const cep = event.target?.value as string;
    if (cep && cep.length) {
      this.cepService.buscar(cep).subscribe(
        (addressInfo) => {
          this.fillForm(addressInfo);
        }
      );
    }
  }

  private fillForm(addressInfo: any): void {
    this.cadastroForm.patchValue({
      nomeDaRua: addressInfo.logradouro,
      uf: (addressInfo.uf as string).toLowerCase(),
      cidade: addressInfo.localidade
    });
  }

  queryUFs(): string[] {
    return this.cepService.ufs;
  }

  queryCitiesByUF(uf: string): void {
    this.cities = [];
    this.cepService.getCitiesByUF(uf).subscribe(
      returnedCities => {
        returnedCities.forEach((city: any) => this.cities.push(city.nome));
      }
    );
  }

  getEmailInputErrorMessage() {
    if (this.email?.hasError('required')) {
      return this.requiredFieldErrorMessage;
    }

    return this.email?.hasError('email') ? 'E-mail inválido.' : '';
  }

  get nome() { return this.cadastroForm.get('nome'); }

  get email() { return this.cadastroForm.get('email'); }

  get cpf() { return this.cadastroForm.get('cpf'); }

  get telefone() { return this.cadastroForm.get('telefone'); }

  get cep() { return this.cadastroForm.get('cep'); }

  get nomeDaRua() { return this.cadastroForm.get('nomeDaRua'); }

  get numeroResidencia() { return this.cadastroForm.get('numeroResidencia'); }

  get uf() { return this.cadastroForm.get('uf'); }

  get cidade() { return this.cadastroForm.get('cidade'); }

  get senha() { return this.cadastroForm.get('senha'); }
}
