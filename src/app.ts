const country = "I love Bangladesh.";

/* exp 1 */
let playerName = "Mashrafi";

// playerName = 32;

// console.log(playerName);

/* exp 2 */
let manName;

manName = "Sakib";

manName = 38;

// console.log(playerName);

/* exp 3 */
function multiply(a: number, b: number) {
  return a * b;
}

// console.log(multiply("hello", 5)); wrong
// console.log(multiply(3, 5));

/* exp 4 */
let fruits = ["apple", "banana", "orange"];

// fruits.push(35) wrong
// fruits.push("hello")

// let mixed = ["mango", 51, true];

// mixed.push({"mahin"}); wrong
// mixed.push(35);

let mixed = ["mango", 51, true, {}];

mixed.push({ name: "apple " });

/* exp 5 */
let person = {
  name: "Mashrafi",
  age: 34,
  isCaptain: true,
};

// person.country = "bangladesh"; wrong

/* exp 6 */

let a: string;

let b: number;

let c: number | string;

let d: {
  name: string;
  age: number;
  adult: boolean;
};

d = {
  name: "hello",
  age: 52,
  adult: false,
};

a = "hello";

b = 20;

/* exp 7 */
// array
let stringArray: string[] = [];

// stringArray.push(2); wring
stringArray.push("hello");

let mixedArray: (string | number)[] = [];

mixedArray.push("number");
mixedArray.push(52);
