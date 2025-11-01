import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cadastrousuario',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './cadastrousuario.component.html',
  styleUrl: './cadastrousuario.component.css'
})
export class CadastrousuarioComponent {

}
