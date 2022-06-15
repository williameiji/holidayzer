import styled from "styled-components";

export default function SelectMonth({ handleChange }) {
	return (
		<>
			<Selects required onChange={handleChange} defaultValue="">
				<option value="0">Todos</option>
				<option value="1">Janeiro</option>
				<option value="2">Fevereiro</option>
				<option value="3">Março</option>
				<option value="4">Abril</option>
				<option value="5">Maio</option>
				<option value="6">Junho</option>
				<option value="7">Julho</option>
				<option value="8">Agosto</option>
				<option value="9">Setembro</option>
				<option value="10">Outubro</option>
				<option value="11">Novembro</option>
				<option value="12">Dezembro</option>
			</Selects>
		</>
	);
}

const Selects = styled.select`
	width: 200px;
	height: 50px;
	border-radius: 5px;
	border: 0;
	text-align: center;
	font-size: 20px;

	option {
		font-size: 20px;
	}
`;
