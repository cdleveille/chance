import React, { useState } from "react";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Autocomplete, Button, TextField } from "@mui/material";

interface IDiceProps {
	removeDie: (i: number) => void;
	index: number;
	sides: string[];
	updateDie: (i: number, value: string[]) => void;
}

const Dice: React.FC<IDiceProps> = ({ removeDie, index, sides, updateDie }) => {
	const [rollResult, setRollResult] = useState("");

	const roll = () => {
		setRollResult(sides[Math.floor(Math.random() * sides.length)]);
	};

	return (
		<div className="dice">
			<Button className="button" variant="outlined" onClick={roll}>
				Roll
			</Button>
			<CloseOutlinedIcon
				className="icon close"
				onClick={() => {
					removeDie(index);
				}}
			/>
			<div className="result">{rollResult}</div>
			<Autocomplete
				value={sides}
				className="input"
				multiple
				renderInput={(params) => (
					<TextField {...params} label={`Sides (${sides.length})`} placeholder="New Side..." />
				)}
				onChange={(e, value) => {
					updateDie(index, value as string[]);
				}}
				options={[]}
				freeSolo={true}
				fullWidth={true}
			/>
		</div>
	);
};

export default Dice;
