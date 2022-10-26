import { ListagemViagemComponent } from './../listagem-viagem/listagem-viagem.component';
import { CadastroViagemComponent } from './../cadastro-viagem/cadastro-viagem.component';
import { DetalhesViagemComponent } from '../detalhes-viagem/detalhes-viagem.component';
import { ExclusaoViagemComponent } from '../exclusao-viagem/exclusao-viagem.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';

const routes: Routes = [
  {path: 'cadastro', component: CadastroViagemComponent},
  {path: '', component: ListagemViagemComponent},
  {path: 'detalhes/:id', component: DetalhesViagemComponent},
  {path: 'exclusao/:id', component: ExclusaoViagemComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
