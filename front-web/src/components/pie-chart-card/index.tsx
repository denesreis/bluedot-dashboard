import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
	labels?: string[],
	name: string,
	series?: number[]
};

//Inicializando o labels e series como uma lista de arrays vazias para evitar erro quando for utilizado
function PieChartCard({ labels = [], name, series = [] }: Props) {
	return (
		<div className="pie-chart-card base-card">
			<ReactApexChart
				options={buildPieChartConfig(labels, name)}
				type="donut"
				width="400"
				series={series}
			/>
		</div>
	);
}

export default PieChartCard;
