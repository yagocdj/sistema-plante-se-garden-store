import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private administradores: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nome: [''],
      senha: ['']
    });
  }

  acessar(): void {
    const nome = this.loginForm.value.nome;
    const senha = this.loginForm.value.senha;

    this.administradores
      .collection('administradores', (ref) => ref.where('nome', '==', nome).where('senha', '==', senha).limit(1)
      ).get().subscribe((querySnapshot) => {
        if (!querySnapshot.empty) {
          alert('Login efetuado com sucesso!');
          this.router.navigate(['/admin-menu']);
        } else {
          alert('Usuário incorreto!');
          this.loginForm.reset();
        }
      });
  }
}


// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder  } from '@angular/forms'
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login-admin',
//   templateUrl: './login-admin.component.html',
//   styleUrls: ['./login-admin.component.scss']
// })
// export class LoginAdminComponent implements OnInit {

//   public loginForm!: FormGroup
//   constructor (private formBuilder: FormBuilder, private http: HttpClient, private router: Router){}

//     ngOnInit():void{
//       this.loginForm = this.formBuilder.group({
//         nome:[''],
//         senha:['']
//       })
//     }

//     acessar():void{
//       this.http.get<any>("http://localhost:3000/administradores").subscribe(res=>{
//         const usuario = res.find((a:any)=>{
//           return a.nome === this.loginForm.value.nome && a.senha === this.loginForm.value.senha
//         });
//         if(usuario){
//           alert("Login efetuado com sucesso!");
//           this.loginForm.reset;
//           this.router.navigate(['/admin-menu']);
//         } else{
//           alert("Usuário incorreto!");
//         }
//       })
//     }

// }
