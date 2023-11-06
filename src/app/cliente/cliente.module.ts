import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { LayoutModule } from '../layout/layout.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    CadastroClienteComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    CadastroClienteComponent
  ]
})
export class ClienteModule { }
