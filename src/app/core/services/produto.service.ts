import { Injectable } from '@angular/core';
import { Produto } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

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
}
