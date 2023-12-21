import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Cliente} from 'src/app/shared/model/cliente';
import {CepService} from 'src/app/shared/services/cep.service';
import {ClienteService} from 'src/app/shared/services/cliente.service';
import {ActivatedRoute, Router} from "@angular/router";
import {MensagemService} from "../../shared/services/mensagem.service";
import {MensagemSweetService} from "../../shared/services/mensagem-sweet.service";

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  readonly NOME_BOTAO_CADASTRAR = 'Cadastrar';
  readonly NOME_BOTAO_ATUALIZAR = 'Atualizar';
  cadastroForm!: FormGroup;
  readonly requiredFieldErrorMessage = 'Este campo é obrigatório.';
  cities: string[] = [];
  clienteDeManipulacao: Cliente;
  estahCadastrando: boolean = true;
  nomeBotao = this.NOME_BOTAO_CADASTRAR;

  constructor(
    private cepService: CepService,
    private clienteService: ClienteService,
    private rotaAtivada: ActivatedRoute,
    private mensagemService: MensagemSweetService,
    private roteador: Router
  ) {
    const idEdicao = this.rotaAtivada.snapshot.paramMap.get('id');
    if (idEdicao) {
      this.estahCadastrando = false;
      this.clienteService.localizarPorId(idEdicao).subscribe(clienteRetornado => {
        this.clienteDeManipulacao = clienteRetornado;
      });
    }
    this.clienteDeManipulacao = new Cliente('', '', '', '', '', '');
    this.nomeBotao = this.estahCadastrando ? this.NOME_BOTAO_CADASTRAR : this.NOME_BOTAO_ATUALIZAR;
  }

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
      senha: new FormControl('', [Validators.required, Validators.minLength(5),
        Validators.maxLength(25)])
    });
  }

  // FIXME - corrigir a questão da senha
  criarOuAtualizarCliente(): void {
    if (this.cadastroForm.valid) {
      if (this.estahCadastrando) {
        this.clienteService.localizarPorEmail(this.email?.value).subscribe(
          clientePesquisado => {
            if (clientePesquisado) {
              this.mensagemService.erro(`Já há email com o email ${this.clienteDeManipulacao.email}`);
            } else {
              const address = `${this.nomeDaRua?.value},${this.numeroResidencia?.value},${this.cidade?.value}-${this.uf?.value.toUpperCase()},${this.cep?.value}`;
              this.clienteService.inserir({
                nome: this.nome?.value,
                cpf: this.cpf?.value,
                email: this.email?.value,
                endereco: address,
                telefone: this.telefone?.value,
                senha: this.senha?.value
              } as Cliente).subscribe(
                clienteInserido => {
                  this.mensagemService.sucesso('Cliente cadastrado!');
                  this.roteador.navigate(['/loja-produto']);
                });
            }
          }
        );
      } else {
        const address = `${this.nomeDaRua?.value},${this.numeroResidencia?.value},${this.cidade?.value}-${this.uf?.value.toUpperCase()},${this.cep?.value}`;

        this.clienteDeManipulacao.nome = this.nome?.value;
        this.clienteDeManipulacao.cpf = this.cpf?.value;
        this.clienteDeManipulacao.email = this.email?.value;
        this.clienteDeManipulacao.endereco = address;
        this.clienteDeManipulacao.telefone = this.telefone?.value;
        this.clienteDeManipulacao.senha = this.senha?.value;

        this.clienteService.atualizar({
            nome: this.nome?.value,
            cpf: this.cpf?.value,
            email: this.email?.value,
            endereco: address,
            telefone: this.telefone?.value,
            senha: this.senha?.value
          } as Cliente).subscribe(cliente => {
          this.mensagemService.sucesso('Cliente atualizado!');
          this.roteador.navigate(['/loja-produto']);
        });
      }
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

  get nome() {
    return this.cadastroForm.get('nome');
  }

  get email() {
    return this.cadastroForm.get('email');
  }

  get cpf() {
    return this.cadastroForm.get('cpf');
  }

  get telefone() {
    return this.cadastroForm.get('telefone');
  }

  get cep() {
    return this.cadastroForm.get('cep');
  }

  get nomeDaRua() {
    return this.cadastroForm.get('nomeDaRua');
  }

  get numeroResidencia() {
    return this.cadastroForm.get('numeroResidencia');
  }

  get uf() {
    return this.cadastroForm.get('uf');
  }

  get cidade() {
    return this.cadastroForm.get('cidade');
  }

  get senha() {
    return this.cadastroForm.get('senha');
  }
}
