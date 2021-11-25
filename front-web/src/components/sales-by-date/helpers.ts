import { ApexOptions } from 'apexcharts';
import { SalesByDate } from '../../utils/types';

export const chartOptions = {
  legend: {
    show: false
  },
  noData: {
    text: 'Sem resultados',
    align: 'center',
    verticalAlign: 'middle',
    offsetY: -15,
    style: {
      color: '#FFF',
      fontSize: '18px',
      fontFamily: 'Roboto, sans-serif'
    }
  },
  chart: {
    foreColor: '#b4bed2',
    height: 240,
    with: 1000
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '20%',
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: false
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {},
  fill: {
    opacity: 1,
    colors: ['#3e82f7']
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: function (val: number) {
        return `R$ ${val}`;
      }
    }
  }
} as ApexOptions;


export const buildChartSeries = (salesByDate: SalesByDate[] = []) =>{
  return salesByDate.map(({date, sum}) => ({
    x: date,
    y: sum
  }))
}

/* Maneira anterior que foi feita pra explicar melhor
export const buildChartSeries = (salesByDate: SalesByDate[] = []) =>{
  return salesByDate.map(sale => ({ /*A função recebe uma lista de SalesByDate
    x: sale.date, /*Para cada sale retorne x como sendo um sale.date e y como sendo um sale.sum
    y: sale.sum /*Isso vai fazer com que retorno uma array de x e y que é o que o apexchart reconhece
  }))
} */

export const sumSalesByData = (salesByDate: SalesByDate[] = []) =>{
  return salesByDate.reduce((previosValue,currentValue) => {
    return previosValue + currentValue.sum;
  },0) /*retornando o somatório dos itens de uma array usando a função do JS reduce */
}
