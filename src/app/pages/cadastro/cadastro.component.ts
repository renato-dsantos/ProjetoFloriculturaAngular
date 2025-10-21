import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

    /**
     * produtoId?: number;
     * 
     * produto: Produto = {} as Produto;
     * 
     * constructor(
     *    private service: ProdutoService,
     *    private router: Router,
     *    private route: ActivatedRoute
     * ){
     *    
     *  this.produtoId = Number(this.route.snapshot.params['id']);
     * 
     *  if(this.produtoId){
     *    service.buscarPorID(this.produtoid).subscribe(produto =>{
     *         if(produto){
     *            this.produto.id = produto.id;
     *            this.produto.nome = produto.nome;
  *               this.produto.tipo = produto.tipo;
  *               this.produto.preco - produto.preco;
  *               this.produto.quantidade = produto.quantidade;
  *               this.produto.descricao = produto.descricao
     *    }
     *  })
     * }
     * 
     * submeter(){
     *    if(this.produtoId){
     *      this.service.editar(this.produto).subscribe(() =>{
     *          this.router.navigate(['/produto'])
     *      })
     *    }else{
     *      this.service.incluir(this.produto).subscribe(()=>{
     *        this.router.navigate(['/produtos'])
     *      })
     *    }
     * }
     *
     */
   

}
