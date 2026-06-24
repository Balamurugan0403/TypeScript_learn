export{};
console.log("Enter the code: ");
let code:number=Number(process.argv[2]);
if(code==1){
    console.log("Enter the first number: ");
    let num1:number=Number(process.argv[3]);
    console.log("Enter the second number: ");
    let num2:number=Number(process.argv[4]);
    console.log(num1+num2);
}
else if(code==2){
    console.log("Enter the first integer: ");
    let num1:number=Number(process.argv[3]);
    console.log("Enter the second integer: ");
    let num2:number=Number(process.argv[4]);
    console.log(num1*num2);
}
else if(code==3){
    console.log("Enter the first string: ");
    let str1:string=process.argv[3];
    console.log("Enter the second string: ");
    let str2:string=process.argv[4];
    console.log(str1+str2);
}