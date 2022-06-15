import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import HolidaysContext from "../../context/HolidaysContext";
import RenderDate from "./RenderDate";

export default function HolidaysScreen() {
	const { setSelectedMonth, renderHolidays, setRenderHolidays } =
		useContext(HolidaysContext);

	const navigate = useNavigate();

	function clickBack() {
		navigate("/");
		setSelectedMonth(0);
		setRenderHolidays([]);
	}

	return (
		<Box>
			<RenderDate renderHolidays={renderHolidays} />
			<Button onClick={clickBack}>Voltar</Button>
		</Box>
	);
}

const Box = styled.div`
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Button = styled.div`
	color: white;
	position: fixed;
	top: 0px;
	left: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 50px;
`;
