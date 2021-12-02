import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import SalesTable from './components/sales-tables';
import { buildSalesByPaymentMethod, buildSalesByStoreChart } from './helpers';
import { buildFilterParams, makeRequest } from './utils/request';
import { FilterData, PyChartConfig, SalesByPaymentMethod, SalesByStore } from './utils/types';

function App() {
	//Criando o estado dentro do APP para poder saber o valor que esta dento fo filtro
	const [filterData, setFilterData] = useState<FilterData>();
	//Colocando o sales
	const [salesByStore, setSalesByStore] = useState<PyChartConfig>();

	const [salesByPaymentMethod, setsalesByPaymentMethod] = useState<PyChartConfig>();

	const params = useMemo(() => buildFilterParams(filterData), [filterData]);

	useEffect(() => {
		makeRequest
			/*SalesByStore importado do types.ts passado como tipo "" */
			.get<SalesByStore[]>('/sales/by-store', { params })
			.then(response => {
				const newSalesByStore = buildSalesByStoreChart(response.data);
				setSalesByStore(newSalesByStore);
			})
			.catch(() => {
				console.error('Erro na comunicação com API Sales By Store');
			});
	}, [params]);

	useEffect(() => {
		makeRequest
			/*SalesByStore importado do types.ts passado como tipo "" */
			.get<SalesByPaymentMethod[]>('/sales/by-payment-method', { params })
			.then(response => {
				const newSalesByPaymentMethod = buildSalesByPaymentMethod(response.data);
				setsalesByPaymentMethod(newSalesByPaymentMethod);
			})
			.catch(() => {
				console.error('Erro na comunicação com API Sales By payment-method');
			});
	}, [params]);

	const onFilterChange = (filter: FilterData) => {
		setFilterData(filter);
		//console.log({ filter });
	};

	return (
		<>
			<Header />
			<div className="app-container">
				<Filter onFilterChange={onFilterChange} />
				<SalesByDate filterData={filterData} />
				<div className="sales-overview-container">
					<SalesSummary filterData={filterData} />
					<PieChartCard name="Lojas" labels={salesByStore?.labels} series={salesByStore?.series} />
					<PieChartCard
						name="Pagamento"
						labels={salesByPaymentMethod?.labels}
						series={salesByPaymentMethod?.series}
					/>
				</div>
				<SalesTable filterData={filterData} />
			</div>
		</>
	);
}

export default App;
