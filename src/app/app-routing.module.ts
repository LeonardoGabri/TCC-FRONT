import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/inicio/modulo/inicio.module').then((m) => m.InicioModule),
    pathMatch: 'full'
  },
  {
    path: 'monitoramento',
    loadChildren: () =>
      import('../app/monitoramento/modulo/monitoramento.module').then((m) => m.MonitoramentoModule),
    pathMatch: 'full'
  },
  {path: '', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
