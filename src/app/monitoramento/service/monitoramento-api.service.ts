import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MonitoramentoApiService{
  protected readonly pathApi = `${environment.url.service}`

  constructor(protected http: HttpClient){}

  listarTodos(){
    return this.http.get(`http://${this.pathApi}/anemometro`).pipe(take(1))
  }

  listarPortas(){
    return this.http.get(`http://${this.pathApi}/portas`).pipe(take(1))
  }

  inserirPortas(funcionamentoNormal: boolean){
    return this.http.get(`http://${this.pathApi}/portas/${funcionamentoNormal}`).pipe(take(1))
  }
}
