import './styles.css';

function SalesTable() {
	return (
		<div className="sales-table-container base-card">
			<h3 className="sales-table-title"> Vendas Recentes</h3>
			<table className="sales-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Data</th>
						<th>Genero</th>
						<th>Categoria</th>
						<th>Loja</th>
						<th>Forma de Pagamento</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>#341</td>
						<td>24/11/2021</td>
						<td>Feminino</td>
						<td>Acessórios</td>
						<td>Lavras</td>
						<td>Credito</td>
						<td>R$ 1100.50</td>
					</tr>
					<tr>
						<td>#341</td>
						<td>24/11/2021</td>
						<td>Feminino</td>
						<td>Acessórios</td>
						<td>Lavras</td>
						<td>Credito</td>
						<td>R$ 1100.50</td>
					</tr>
					<tr>
						<td>#341</td>
						<td>24/11/2021</td>
						<td>Feminino</td>
						<td>Acessórios</td>
						<td>Lavras</td>
						<td>Credito</td>
						<td>R$ 1100.50</td>
					</tr>
					<tr>
						<td>#341</td>
						<td>24/11/2021</td>
						<td>Feminino</td>
						<td>Acessórios</td>
						<td>Lavras</td>
						<td>Credito</td>
						<td>R$ 1100.50</td>
					</tr>
					<tr>
						<td>#341</td>
						<td>24/11/2021</td>
						<td>Feminino</td>
						<td>Acessórios</td>
						<td>Lavras</td>
						<td>Credito</td>
						<td>R$ 1100.50</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default SalesTable;
