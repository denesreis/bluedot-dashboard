import { FilterData } from "./types";

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR',{
    minimumFractionDigits:2, /*Numero de casas decimais  */
    style: 'currency', /*estilo moeda */
    currency: 'BRL'
  }).format(price);
}

export const formatDate = (date: Date) => {
return date.toLocaleDateString();
}


export const formatDateToServer = (date? : Date) => {
  if (date){
    return date?.toISOString().substring(0,10) //date = new Date() date.toISOString()  = '2021-11-27T14:03:30.985Z'

  }
}
