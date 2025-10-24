import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FavoritoComponent } from './pages/favorito/favorito.component';

export const routes: Routes = [

        {
            path: '',
            component:HomeComponent,
            title:'home'
        },
        {
          path:'login',
          component:LoginComponent,
          title: 'login'
        },
        {
            path: 'produto',
            component:ProdutoComponent,
            title:'produto'
        },
        {
          path:'cadastro',
          component: CadastroComponent,
          title:'cadastro'

        },
        {
          path:'favorito',
          component: FavoritoComponent,
          title:'favorito'

        },
        {
        path: 'produto/alterar/:id',
        component: CadastroComponent,
        title: 'Produto - Alterar',
    }



];
