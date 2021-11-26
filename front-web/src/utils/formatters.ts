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
