import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Produto } from '../../core/types/types';
import { ProdutoService } from '../../core/services/produto.service';

@Component({
  selector: 'app-produto',
  imports: [RouterModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit{
[x: string]: any;

  listarProduto: Produto[] = [];
  constructor(private service: ProdutoService){}

  ngOnInit(): void {
    this.listarProduto = this.service.listar();
  }

}
