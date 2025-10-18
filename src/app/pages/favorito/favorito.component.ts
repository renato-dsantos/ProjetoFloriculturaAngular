import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-favorito',
  imports: [RouterModule, HeaderComponent],
  templateUrl: './favorito.component.html',
  styleUrl: './favorito.component.css'
})
export class FavoritoComponent {

}
