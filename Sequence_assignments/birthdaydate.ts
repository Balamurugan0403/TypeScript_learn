export {};
let birthDate:string=String(process.argv[2]);
let parts:string[]=birthDate.split("-");

let birthYear:number=Number(parts[0]);
let birthMonth:number=Number(parts[1]);
let birthDay:number=Number(parts[2]);

let today:Date=new Date();

let currentYear:number=today.getFullYear();
let currentMonth:number=today.getMonth() + 1;
let currentDay:number=today.getDate();
let cal_age:number=currentYear-birthYear;

if (currentMonth<birthMonth||(currentMonth===birthMonth &&currentDay<birthDay)) {
    cal_age--;
}
console.log("Your age is: "+cal_age+" years");