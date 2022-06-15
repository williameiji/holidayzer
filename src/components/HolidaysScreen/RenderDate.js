import styled from "styled-components";

export default function RenderDate({ renderHolidays }) {
	return (
		<>
			{renderHolidays.length ? (
				renderHolidays.map((element, index) => (
					<Text key={index}>
						{element.date} - {element.name}
					</Text>
				))
			) : (
				<Message>Não há feriado nesse mês</Message>
			)}
		</>
	);
}

const Text = styled.p`
	font-family: "Amatic SC", cursive;
	font-size: 30px;
	box-sizing: border-box;
	padding: 5px 20px;
	color: white;
	margin-bottom: 15px;
	font-weight: bold;
`;

const Message = styled.p`
	color: white;
	font-size: 30px;
`;
