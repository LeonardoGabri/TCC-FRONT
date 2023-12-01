export interface ItemAnemometro{
  angulo: string;
  direcao: string;
  velocidade: number;
  velocidade_formatada: string;
  id: string;
  energia_gerada: number;
  energia_formatada: string;

}

export const navegacaoMonitoramento = {
  label: 'Monitoramento',
  link: '/monitoramento'
}

export const menu = [
  navegacaoMonitoramento
]
