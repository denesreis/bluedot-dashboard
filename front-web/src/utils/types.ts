export type Gender = 'MALE' | 'FEMALE' | 'OTHER' //Vai ser Male ou Female ou other

export type SalesByDate = { /*Definindo o tipo do retorno do salesbydate */
  date: string;
  sum: number;
}

export type ChartSeriesData = {

  x: string;
  y:  number

}

export type FilterData = {
  //o ? oindica que vai ser opcional porque quando carrega a página esta  vazio
  dates?: Date[];  //Vai ser uma lista de datas
  gender?: Gender;

}
