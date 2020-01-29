import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoNovoComponent } from './produto-novo/produto-novo.component';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent,
    data: { title: ''}
  },
  {
    path: 'produto-novo',
    component: ProdutoNovoComponent,
    data: { title: ''}
  },
  {
    path: 'produto-editar/:id',
    component: ProdutoEditarComponent,
    data: { title: ''}
  },
  {
    path: 'produto-detalhe/:id',
    component: ProdutoDetalheComponent,
    data: { title: ''}
  },
  {
    path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
