import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastrousuario',
  imports: [HeaderComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './cadastrousuario.component.html',
  styleUrl: './cadastrousuario.component.css'
})
export class CadastrousuarioComponent {

  formulario = new FormGroup({
    nome : new FormControl('',[Validators.required, Validators.minLength(3)]),
    sobrenome: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.minLength(3), Validators.email]),
    cpf: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(11)]),
    datanascimento: new FormControl('', [Validators.required]),
    telefone: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(11)]),
    senha: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(12)]), 
    confirmarsenha: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(12)]), 
    rua: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]), 
    numero:  new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(5)]), 
    bairro: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    cidade: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    cep: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(9)]),
  });

   onSubmit(){
    if(this.formulario.valid){
      alert('Formulário enviado com sucesso!' + JSON.stringify(this.formulario.value));
    }
  }

}