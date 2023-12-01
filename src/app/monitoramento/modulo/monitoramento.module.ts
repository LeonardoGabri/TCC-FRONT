import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PoModule } from "@po-ui/ng-components";
import { MonitoramentoComponent } from "../componente/monitoramento.component";
import { MonitoramentoRoutingModule } from "./monitoramento-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MonitoramentoRaizComponent } from "../monitoramento-raiz.component";

@NgModule({
  declarations: [MonitoramentoComponent, MonitoramentoRaizComponent],
  imports: [HttpClientModule, CommonModule, PoModule, ReactiveFormsModule, FormsModule, MonitoramentoRoutingModule],
  exports: []
})
export class MonitoramentoModule{}
