import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import "../assets/css/reset.css";

import backgroundImg from "../assets/images/background.jpg";
import HolidaysContext from "../context/HolidaysContext";
import InitialScreen from "./InitialScreen/InitialScreen";
import HolidaysScreen from "./HolidaysScreen/HolidaysScreen";

export default function App() {
	const [controlRender, setControlRender] = useState(false);
	const [selectedMonth, setSelectedMonth] = useState(0);
	const [renderHolidays, setRenderHolidays] = useState([]);

	return (
		<Box>
			<HolidaysContext.Provider
				value={{
					controlRender,
					setControlRender,
					setSelectedMonth,
					selectedMonth,
					renderHolidays,
					setRenderHolidays,
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<InitialScreen />} />
						<Route path="/holidays" element={<HolidaysScreen />} />
					</Routes>
				</BrowserRouter>
			</HolidaysContext.Provider>
		</Box>
	);
}

const Box = styled.div`
	background-size: cover;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-image: url(${backgroundImg});
`;
