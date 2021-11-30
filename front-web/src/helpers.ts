

//Helpers para montar os dados de acordo com o que o apexcharts entende = uma lista de x e y

import { SalesByPaymentMethod, SalesByStore } from "./utils/types";

//Vai converter uma lista de salesbystore em uma lista de x  e y
export const buildSalesByStoreChart = (sales: SalesByStore[]) => {
  const labels = sales.map(sale => sale.storeName);
  const series = sales.map(sale => sale.sum);

  //Retornar um objeto que vai conter uma lista de labels e uma lista de series
  return {
    labels,
    series
  };
}

export const buildSalesByPaymentMethod = (sales: SalesByPaymentMethod[]) => {
  const labels = sales.map(sale => sale.description);
  const series = sales.map(sale => sale.sum);

  //Retornar um objeto que vai conter uma lista de labels e uma lista de series
  return {
    labels,
    series
  };
}
