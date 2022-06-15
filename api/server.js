import express from "express";
import cors from "cors";
import holidays from "./arrHolidays.js";

const server = express();

server.use(cors());

server.get("/holidays", (request, response) => {
	response.send(holidays);
});

server.get("/is-today-holiday", (request, response) => {
	const hoje = new Date();
	const todayHoliday = holidays
		.map((holiday) => holiday)
		.filter((elem) => elem.date === hoje.toLocaleDateString("en-US"));

	if (todayHoliday.length) {
		response.send(`Hoje é ${todayHoliday[0].name} 🤪`);
	} else {
		response.send("Hoje não é feriado 😔");
	}
});

server.get("/holidays/:idMouth", (request, response) => {
	const id = request.params.idMouth;
	const holidaysPerMonth = holidays
		.map((holiday) => holiday)
		// eslint-disable-next-line array-callback-return
		.filter(function (elem) {
			let splitDate = elem.date.split("/");
			if (splitDate[0] === id) {
				return elem;
			}
		});
	response.send(holidaysPerMonth);
});

server.listen(5000);
