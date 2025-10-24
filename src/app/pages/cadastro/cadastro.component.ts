import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../../core/types/types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [RouterModule,FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
   
      produtoId?: number;
     
      produto: Produto = {} as Produto;
      
        constructor(
              private service: ProdutoService,
              private router: Router,
              private route: ActivatedRoute
      ){
        this.produtoId = Number(this.route.snapshot.params['id']);
        if(this.produtoId){
          service.buscarPorID(this.produtoId).subscribe(produto =>{
            if(produto){
                this.produto.id = produto.id;
                this.produto.nome = produto.nome;
                this.produto.tipo = produto.tipo;
                this.produto.preco - produto.preco;
                this.produto.quantidade = produto.quantidade;
                this.produto.descricao = produto.descricao
        }
          })
        }/**fim if */
      }/**fim construtor */

      submeter(){
        if(this.produtoId){
           this.service.editar(this.produto).subscribe(() =>{
               this.router.navigate(['produto'])
           })
         }else{
            this.service.incluir(this.produto).subscribe(()=>{
              this.router.navigate(['produto'])
            }
            )
         }
      }
}/**fim cadastrocomponet */      
      
