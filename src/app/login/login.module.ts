import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//import { LoginAdminComponent } from './login-admin/login-admin.component';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms'
import {Router, RouterLink, RouterModule} from '@angular/router';
import {LoginClienteComponent} from './login-cliente/login-cliente.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    //LoginAdminComponent

    LoginClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports: []
})
export class LoginModule {

}
