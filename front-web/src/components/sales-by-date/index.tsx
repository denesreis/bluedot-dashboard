import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildChartSeries, chartOptions, sumSalesByData } from './helpers';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { ChartSeriesData, FilterData, SalesByDate } from '../../utils/types';
import { formatDate, formatPrice } from '../../utils/formatters';

type Props = {
	filterData?: FilterData
};

function SalesByDateComponente({ filterData }: Props) {
	const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>(
		[]
	); /* ChartSeriesData= definido no uitl/types.ts */

	const [totalSum, setTotalSum] = useState(0);

	//Foi utilizado o useMemo() porque como como o filterData foi declarado como dependencia no useEffect() deu loop infinito
	//Como uso do useMemo() o react memoriza o conteúdo do filtedata e só executa o makequest somente quando alterar o valor
	const params = useMemo(() => buildFilterParams(filterData), [filterData]);

	useEffect(() => {
		makeRequest
			/*.get<SalesByDate[]>(
				'/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=FEMALE'
			) /*SalesByDate importado do types.ts passado como tipo "" */
			.get<SalesByDate[]>('/sales/by-date', { params })
			.then(response => {
				const newChartSeries = buildChartSeries(response.data);
				setChartSeries(newChartSeries);
				const newTotalSum = sumSalesByData(response.data);
				setTotalSum(newTotalSum);
			})
			.catch(() => {
				console.error('Erro na comunicação com API Sales By Date');
			});
	}, [params]);

	return (
		<div className="sales-by-date-container base-card">
			<div>
				<h4 className="sales-by-date-title">Evolução das vendas</h4>
				{filterData?.dates && (
					<span className="sales-by-date-period">
						{formatDate(filterData?.dates?.[0])} até {formatDate(filterData?.dates?.[1])}
					</span>
				)}
			</div>
			<div className="sales-by-date-data">
				<div className="sales-by-date-quantity-container">
					<h2 className="sales-by-date-quantity">{formatPrice(totalSum)}</h2>
					<span className="sales-by-date-quantity-label">Vendas no período</span>
					<span className="sales-by-date-description">
						O gráfico mostra as vendas em todas as lojas
					</span>
				</div>
				<div className="sales-by-date-chart">
					<ReactApexChart
						options={chartOptions}
						series={[{ name: 'Vendas', data: chartSeries }]}
						type="bar"
						height={240}
						width="100%"
					/>
				</div>
			</div>
		</div>
	);
}

export default SalesByDateComponente;
