import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildChartSeries, chartOptions, sumSalesByData } from './helpers';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';
import { ChartSeriesData, SalesByDate } from '../../utils/types';
import { formatPrice } from '../../utils/formatters';

function SalesByDateComponente() {
	const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>(
		[]
	); /* ChartSeriesData= definido no uitl/types.ts */

	const [totalSum, setTotalSum] = useState(120);

	useEffect(() => {
		makeRequest
			.get<SalesByDate[]>(
				'/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=FEMALE'
			) /*SalesByDate importado do types.ts passado como tipo "" */
			.then(response => {
				const newChartSeries = buildChartSeries(response.data);
				setChartSeries(newChartSeries);
				const newTotalSum = sumSalesByData(response.data);
				setTotalSum(newTotalSum);
			});
	}, []);

	return (
		<div className="sales-by-date-container base-card">
			<div>
				<h4 className="sales-by-date-title">Evolução das vendas</h4>
				<span className="sales-by-date-period"> 01/01/2017 a 31/01/2017</span>
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
