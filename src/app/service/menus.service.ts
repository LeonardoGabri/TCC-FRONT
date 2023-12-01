import { PoMenuItem } from "@po-ui/ng-components"

const navegaInicio = {
  label: 'Início',
  link:''
 }

 const navegaMonitoramento = {
  label: 'Monitoramento',
  link:'/monitoramento'
 }

const navegaMenusArray = [
navegaInicio,
navegaMonitoramento
] as PoMenuItem[]

export {
  navegaMenusArray,
  navegaMonitoramento,
  navegaInicio,
}
