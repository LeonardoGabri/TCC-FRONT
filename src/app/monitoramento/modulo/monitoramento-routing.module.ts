import { MonitoramentoComponent } from './../componente/monitoramento.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: MonitoramentoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class MonitoramentoRoutingModule{

}
