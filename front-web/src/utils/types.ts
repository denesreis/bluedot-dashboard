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

export type SalesSummaryData = {
  sum?: number;
  min: number;
  max: number;
  avg: number;
  count: number;
}

export type SalesByStore = {
  storeName: string;
  sum: number;
}

export type SalesByPaymentMethod = {
  description : string;
  sum: number;
}

export type PyChartConfig = {
  labels: string[];
  series: number[];
}

export type SalesResponse = {

  content : Sale[];

}

export type Sale = {
  id: number;
  date: string;
  volume: number;
  total: number;
  gender: Gender;
  categoryName: string;
  paymentMethod: string;
  storeName: string;

}
