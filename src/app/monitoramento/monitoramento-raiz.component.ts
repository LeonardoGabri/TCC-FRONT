import { Component } from "@angular/core";
import { menu } from "./modelo/item-modelo.model";
import { PoMenuItem } from "@po-ui/ng-components";

@Component({
  selector: 'app-monitoramento-raiz',
  templateUrl: './monitoramento-raiz.component.html'
})
export class MonitoramentoRaizComponent{

  readonly menu: PoMenuItem[] = menu

  constructor(){}
}
