import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Produto } from '../../core/types/types';
import { ProdutoService } from '../../core/services/produto.service';

@Component({
  selector: 'app-produto',
  imports: [RouterModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
/*export class ProdutoComponent implements OnInit{
[x: string]: any;

  listarProduto: Produto[] = [];
  constructor(private service: ProdutoService){}

  ngOnInit(): void {
    this.listarProduto = this.service.listar();
  }

}*/



 export class ProdutoComponent implements OnInit{
 
    listaProduto: Produto[] = [];
    
    constructor(
         private service: ProdutoService,
      private router: Router     
   ){}
    
     ngOnInit(): void {
        this.service.listar().subscribe((produto)=>{
          this.listaProduto = produto;
        });      
      }

      excluir(id:number){
        if(id){
          this.service.excluir(id).subscribe(() =>{
              window.location.reload()
          })
        }
      }
  
  
  
  
  }
  
  
 