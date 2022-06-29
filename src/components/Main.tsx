import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";

import Dice from "./Dice";

const Main: React.FC = () => {
	const [dice, setDice] = useState([] as string[][]);

	const updateLocalStorage = (newDice: string[][]) => {
		window.localStorage.setItem("dice", JSON.stringify(newDice));
	};

	const addDie = (die?: string[]) => {
		const newDice = [...dice, die || []];
		setDice(newDice);
		updateLocalStorage(newDice);
	};

	const updateDie = (i: number, value: string[]) => {
		const newDice = [...dice.slice(0, i), value, ...dice.slice(i + 1, dice.length)];
		setDice(newDice);
		updateLocalStorage(newDice);
	};

	const removeDie = (i: number) => {
		const newDice = [...dice.slice(0, i), ...dice.slice(i + 1, dice.length)];
		setDice(newDice);
		updateLocalStorage(newDice);
	};

	useEffect(() => {
		const localStorageDice = JSON.parse(window.localStorage.getItem("dice") || "[]") as string[][];
		if (localStorageDice.length > 0) {
			setDice(localStorageDice);
		} else addDie();
	}, []);

	return (
		<div className="container">
			<Button
				className="button add"
				variant="outlined"
				onClick={() => {
					addDie();
				}}
			>
				+
			</Button>
			<div className="flexbox">
				{dice.map((die, i) => (
					<Dice removeDie={removeDie} key={i} index={i} sides={dice[i]} updateDie={updateDie} />
				))}
			</div>
		</div>
	);
};

export default Main;
