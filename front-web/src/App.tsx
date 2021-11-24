import React from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import SalesTable from './components/sales-tables';

function App() {
	return (
		<>
			<Header />
			<div className="app-container">
				<Filter />
				<SalesByDate />
				<div className="sales-overview-container">
					<SalesSummary />
					<PieChartCard
						name="Lojas"
						labels={['Uberlandia', 'Uberaba', 'Lavras']}
						series={[40, 30, 60]}
					/>
					<PieChartCard
						name="Pagamento"
						labels={['Crédito', 'Débito', 'Dinheiro']}
						series={[60, 30, 20]}
					/>
				</div>
				<SalesTable />
			</div>
		</>
	);
}

export default App;
