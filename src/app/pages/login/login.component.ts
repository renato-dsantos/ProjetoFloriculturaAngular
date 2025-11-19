import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = ''
  senha = ''
  botaoDesabilitado: boolean = true;

  constructor(private router: Router) { }

  formularioLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(3),Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)])
  })

  onSubmit() {



    if (this.formularioLogin.valid) {
      alert('Formulário enviado com sucesso!\n' + JSON.stringify(this.formularioLogin.value));

      const email = this.formularioLogin.get("email")?.value!
      const senha = this.formularioLogin.get("senha")?.value!

      // console.log("email: " + this.formularioLogin.get("email")?.value)
      // console.log("senha: " + this.senha)

      if (email.trim() !== '' && senha.trim() !== '') {

        if (email == 'admin@admin' && senha == '12345678') {
          this.router.navigate(['/produto'])
        } else if (email == 'usuario@usuario' && senha == '12345678') {
          alert(`Bem-vindo ${email} !`)
          this.router.navigate(['/favorito'])
        } else {
          alert(`Dados Inválidos`)
        }
      } else {
        alert(`Preencha ambos os campos!`)
      }





    }//if

  }


}
