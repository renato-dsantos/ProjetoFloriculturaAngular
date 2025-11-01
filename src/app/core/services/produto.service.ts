import { Injectable } from '@angular/core';
import { Produto } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService{
  private readonly API = 'http://localhost:3000/produto'
  
  constructor(private http:HttpClient) {}
  
     /*Listarproduto*/
     listar(): Observable<Produto[]>{
       return this.http.get<Produto[]>(this.API)
     }
  
     /*BuscarID*/
     buscarPorID(id: number): Observable<Produto | undefined>{
       return this.http.get<Produto>(this.API + `/${id}`);
     }
  
     /*Incluir Produto*/
     incluir(produto: Produto): Observable<Produto>{
       return this.http.post<Produto>(this.API, produto)
     }
  
    /*Editar produto*/
     editar(produto: Produto): Observable<Produto>{
       const url = `${this.API}/${produto.id}`
      return this.http.put<Produto>(url, produto)
     }
     
     /*Excluir produto*/
    excluir(id: number): Observable<Produto>{
       return this.http.delete<Produto>(this.API + `/${id}`);
    }
  }
 








  
/*export class ProdutoService {

  constructor() { }

  listar(): Produto[]{
    return[
      {
        id: 1,
        nome: "Buquê rosas",
        tipo: "Flores",
        preco: 10.00,
        quantidade: 2,
        descricao: "Flores rosas" 
      },
        {
        id: 2,
        nome: "Buquê cravo",
        tipo: "Flores",
        preco: 20.00,
        quantidade: 2,
        descricao: "Flores cravo" 
      },
      {
        id: 2,
        nome: "Buquê cravo",
        tipo: "Flores",
        preco: 20.00,
        quantidade: 2,
        descricao: "Flores cravo" 
      },
    ]
  }
}*/
