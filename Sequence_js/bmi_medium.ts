export {};
const input2=require("prompt-sync")();
let weight:number=input2("Enter your weight in kg: ");
let height:number=input2("Enter your height in meters: ");
let bmi:number=weight/(height*height);
console.log("BMI : "+bmi.toFixed(2));
