import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  itensMenu = [
    { label: 'Home', link: ''},
    { label: 'Favorito', link: '/favorito' },
    { label: 'Login', link: '/login' },
    ]

}
