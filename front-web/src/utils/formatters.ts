/*import { FilterData, Gender } from "./types";*/
import { Gender } from "./types";

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR',{
    minimumFractionDigits:2, /*Numero de casas decimais  */
    style: 'currency', /*estilo moeda */
    currency: 'BRL'
  }).format(price);
}

export const formatDate = (date: Date | string) => { //entra como parametro um date ou uma string
return new Date(date).toLocaleDateString(); //o objeto new Date do JS aceita também um date como parametro
}


export const formatDateToServer = (date? : Date) => {
  if (date){
    return date?.toISOString().substring(0,10) //date = new Date() date.toISOString()  = '2021-11-27T14:03:30.985Z'

  }
}


export const formatGender = (gender : Gender) => {
  //Criando o tipo para retornar o genero
  const textByGender  = {
    MALE:  'Masculino',
    FEMALE: 'Feminino',
    OTHER: 'Outros',
  }
  return textByGender[gender];


}
