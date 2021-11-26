import './styles.css';
import 'flatpickr/dist/themes/material_green.css';
import FlatPicker from 'react-flatpickr';
import flatpickrlib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import React, { useState } from 'react';
import { FilterData, Gender } from '../../utils/types';

flatpickrlib.localize(Portuguese);

type Props = {
  onFilterChange: (filter: FilterData) => void;
}
//Passnao o onfilterchange como parametro para o filter
function Filter({onFilterChange}: Props) {
	//Date = tipo nativo do JS
	const [dates, setDates] = useState<Date[]>([]); //UseState para pegar qual foi a data selecionada. Vai retornar uma lista de data
	const [gender, setGender] = useState<Gender>();

	const onChangeDate = (dates: Date[]) => {
		/*O flatpicker retorna uma lista de datas */
		if (dates.length === 2) {
			//Somente vai fazer a integração se tiver duas datas selecionadas que vai representar o periodo
			setDates(dates);
      onFilterChange({dates,gender});
		}

		//console.log(dates);
	};
  //O parametro vai ser um evento React.ChangeEvent do tipo  HTMLSelectElement
  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) =>{
     //Fazendo um casting informado para o JS que o valor é um Gender
    const selectGender = event.target.value as Gender;
    setGender(selectGender);
    onFilterChange({dates,gender : selectGender});  //Como eu não tenho a certeza de que o gender é o que veio no parametro eu pego o que foi selecionado "selectGender

  }
	return (
		<div className="filter-container base-card">
			<FlatPicker
				options={{
					mode: 'range',
					dateFormat: 'd/m/y',
					showMonths: 2
				}}
				className="filter-input"
				onChange={onChangeDate}
				placeholder="Selecione um período"
			/>
			<select className="filter-input" value={gender} onChange={onChangeGender}>
				<option value="">Selecione um gênero</option>
				<option value="MALE">Masculino</option>
				<option value="FEMALE">Feminino</option>
				<option value="OTHER">Outro</option>
			</select>
		</div>
	);
}

export default Filter;
