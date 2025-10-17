import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
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
