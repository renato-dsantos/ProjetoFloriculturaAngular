import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ProdutoComponent } from './pages/produto/produto.component';

export const routes: Routes = [

{
        path: 'cadastro',
        component: CadastroComponent,
        title: 'Cadastrado de produtos'
    },

    {
      path: 'produto',
        component: ProdutoComponent,
        title: 'Produtos cadastrados'
    }


];
