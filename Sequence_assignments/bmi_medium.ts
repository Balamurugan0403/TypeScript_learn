export {};
const weight: number = Number(process.argv[2]);
const height: number = Number(process.argv[3]);
const bmi: number = weight / (height * height);
console.log("BMI : " + bmi.toFixed(2));
