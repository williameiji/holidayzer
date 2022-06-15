import styled from "styled-components";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import SelectMonth from "./SelectMonth";
import HolidaysContext from "../../context/HolidaysContext";

export default function InitialScreen() {
	const navigate = useNavigate();
	const {
		setSelectedMonth,
		setControlRender,
		selectedMonth,
		setRenderHolidays,
	} = useContext(HolidaysContext);
	const [isTodayHoliday, setIsTodayHoliday] = useState("");

	function handleChange(e) {
		setSelectedMonth(e.target.value);
	}

	function clickCheck() {
		navigate("/holidays");
		getDates();
	}

	function getDates() {
		if (selectedMonth === 0) {
			const promise = axios.get("http://localhost:5000/holidays");
			promise.then((response) => {
				setRenderHolidays(response.data);
			});
		} else {
			const promise = axios.get(
				`http://localhost:5000/holidays/${selectedMonth}`
			);
			promise.then((response) => {
				setRenderHolidays(response.data);
			});
		}
		setControlRender(false);
	}

	useEffect(() => {
		const promise = axios.get("http://localhost:5000/is-today-holiday");

		promise.then((response) => {
			setIsTodayHoliday(response.data);
		});
	}, []);

	return (
		<Box>
			<h1>Holidayzer</h1>
			<p>Verifique os feriados de 2022</p>
			<SelectMonth handleChange={handleChange} />
			<Button onClick={clickCheck}>CHECK</Button>
			<h2>{isTodayHoliday}</h2>
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-family: "Permanent Marker", cursive;
		font-size: 65px;
		color: lightgray;
		margin-top: 100px;
	}

	p {
		font-family: "Amatic SC", cursive;
		font-size: 40px;
		color: lightcoral;
		margin: 70px 0;
	}

	h2 {
		box-sizing: border-box;
		padding: 0 30px;
		font-family: "Permanent Marker", cursive;
		font-size: 30px;
		text-align: center;
		color: lightgray;
		margin-top: 90px;
	}
`;

const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	font-family: "Amatic SC", cursive;
	font-size: 30px;
	padding: 30px 70px;
	width: 40px;
	height: 20px;
	border-radius: 5px;
	background-color: lightskyblue;
	margin-top: 60px;
`;
