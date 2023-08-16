import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './components/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'criar', component: CriarPensamentosComponent },
  { path: 'listar', component: ListarPensamentoComponent },
  { path: 'pensamentos/excluir/:id', component: ExcluirPensamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
