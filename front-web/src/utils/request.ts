import axios from 'axios';
import { formatDateToServer } from './formatters';
import { FilterData } from './types';

/*const baseURL = "http://localhost:8080";*/

export const baseURL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

export const makeRequest = axios.create({
  baseURL
})

export const buildFilterParams = (filterData?: FilterData, extraparams?: Record<string,unknown>) => { //é um objeto que é chave valor de string e unknown. Tipo de dados desconhecido
  return{
    minDate: formatDateToServer(filterData?.dates?.[0]),
    maxDate: formatDateToServer(filterData?.dates?.[1]),
    gender: filterData?.gender,
    ...extraparams //passa o valor usando um SPREAD OPERATOR ...
  }

}
