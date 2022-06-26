export class Dice {
	sides: string[];

	constructor(sides: string[]) {
		this.sides = sides;
	}

	roll() {
		return this.sides[Math.floor(Math.random() * this.sides.length)];
	}
}
