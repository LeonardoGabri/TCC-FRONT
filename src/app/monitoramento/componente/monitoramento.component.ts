import { Component, OnInit } from "@angular/core";
import { colunasMonitoramento } from "../service/monitoramento-service";
import { PoDialogService, PoNotificationService, PoPageAction, PoTableAction } from "@po-ui/ng-components";
import { ItemAnemometro } from "../modelo/item-modelo.model";
import { MonitoramentoApiService } from "../service/monitoramento-api.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.component.html'
})
export class MonitoramentoComponent implements OnInit{

  colunasMonitoramento = colunasMonitoramento
  tituloPagina = 'Monitoramento'
  itemsAnemometro!: ItemAnemometro[]
  public readonly acoes: Array<PoPageAction> = [
    {
      label: 'Gerenciamento das Portas',
      type: 'danger',
      action: this.acaoFecharPortasPoDialog.bind(this)
    }
  ]

  public readonly acaoPortas: PoTableAction[] = [
    {
      label: 'Detalhar Portas',
      disabled: true,
      //action:
    }
  ]

  constructor(
    private monitoramentoApiService: MonitoramentoApiService,
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ){}

  ngOnInit(): void {
    this.listarPortas().subscribe(
      (response: any) => {
        if(response.funcionamento_normal){
          this.tituloPagina = `${this.tituloPagina} - Normal`
        }else{
          this.tituloPagina = `${this.tituloPagina} - PORTAS FECHADAS`
        }
      },
      (error: any) => {
        console.log('ERRO NA API', error);
      }
    );

    this.listarAnemometro()
  }

  listarAnemometro(){
    this.monitoramentoApiService.listarTodos().subscribe({
      next: (response: any) => {
        this.itemsAnemometro = response;
        this.itemsAnemometro.forEach((item: ItemAnemometro) => {
          item.velocidade_formatada = item.velocidade.toFixed(4)
          item.energia_formatada = item.energia_gerada.toFixed(4)
        })
      },
      error: (error: any) => {
        console.log('ERRO NA API', error)
      }
    })
  }

  listarPortas(): Observable<boolean> {
    return this.monitoramentoApiService.listarPortas().pipe(
      map((response: any) => response)
    );
  }

  acaoFecharPortasPoDialog() {
    let fraseParaAbrirPortas = `Deseja voltar o funcionamento normal das portas?`;
    let fraseParaFecharPortas = `Deseja fechar todas as portas?`;

    this.listarPortas().subscribe(
      (response: any) => {
        this.poDialog.confirm({
          title: 'Atenção',
          message: response.funcionamento_normal ? fraseParaFecharPortas : fraseParaAbrirPortas,
          confirm: () => this.acaoFecharPortas(!response.funcionamento_normal)
        });
      },
      (error: any) => {
        console.log('ERRO NA API', error);
      }
    );
  }

  acaoFecharPortas(funcionamentoNormal: boolean){
    this.monitoramentoApiService.inserirPortas(funcionamentoNormal).subscribe({
      next: (retorno: any) => {
        const mensagemDeSucesso = retorno;
        this.poNotification.success(mensagemDeSucesso);
      },
      error: (error: any) => {
        const mensagemDeErro = error;
        this.poNotification.error(mensagemDeErro);
      },
      complete: () => location.reload()
    })
  }
}
