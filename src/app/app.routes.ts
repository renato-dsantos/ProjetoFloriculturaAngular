import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

        {
            path: '',
            component:HomeComponent,
            title:'home'
        },
        {
            path: 'produto',
            component:ProdutoComponent,
            title:'produto'
        },
        {
          path:'CadastroComponent',
          component: CadastroComponent,
          title:'cadastro'

        }


];
