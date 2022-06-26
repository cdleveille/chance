import { Dice } from "./dice";

const dice1 = new Dice(["1", "2", "3", "4", "5", "6"]);
const dice2 = new Dice(["A", "B", "C", "D", "E", "F"]);

console.log(dice1.sides);
console.log(dice2.sides);

console.log(dice1.roll());
console.log(dice2.roll());
