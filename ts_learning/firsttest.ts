let a: number = 10;
let b: number = 20;
let sum: number = a + b;

console.log("Sum:", sum);

let num: number = 32;
let hexa: number = 0x67CF;
let octal: number = 0o67;
let binary: number = 0b1010;

console.log("Number:", num);
console.log("Hexadecimal:", hexa);
console.log("Octal:", octal);
console.log("Binary:", binary);

let message = "good morning";
let color = "blue";
let sentence = "welcome to typescript";

console.log("Message:", message);
console.log("Color:", color);
console.log("Sentence:", sentence);

let boolvar: boolean = true;
let boolvar1 = Boolean(false);
let isDone: boolean = true;
let isPending = Boolean(false);

console.log("Boolean Variable:", boolvar);
console.log("Boolean Variable1:", boolvar1);
console.log("Is Done:", typeof isDone);
console.log("Is Pending:", typeof isPending);

let y: undefined;
let z: null = null;

console.log("Undefined Variable:", typeof y);
console.log("Null Variable:", typeof z);

const secret = Symbol("secret");

const user = {
    name: "alice",
    [secret]: "my secret value"
};

console.log("User Name:", user.name);
console.log("User Secret:", user[secret]);

const symbols = Object.getOwnPropertySymbols(user);
console.log("Symbols in User Object:", symbols);

let fruits: string[] = ["apple", "banana", "mango"];

console.log("Fruits:", fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

for (let index in fruits) {
    console.log(fruits[index]);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let fruit: string[] = ["apple", "banana", "mango"];

fruit.sort();
console.log("Sorted Fruits:", fruit);

console.log("Removed:", fruit.pop());

fruit.push("orange");
console.log("After push:", fruit);

fruit = fruit.concat(["grapes", "kiwi"]);
console.log("After concat:", fruit);

console.log("Index of grapes:", fruit.indexOf("grapes"));

let arr: number[] = [10, 20, 30, 40];

arr.splice(1, 2);
console.log("After splice:", arr);

console.log("Slice:", arr.slice(0, 1));

arr.fill(9, 0, 1);
console.log("After fill:", arr);

let value:number|string;
value=120;
console.log("Value as number:", value);
value="Hello";
console.log("Value as string:", value);




let globalvar:string="I am a global variable";
function exampleFunction() : void {
    console.log(globalvar);
}

exampleFunction();