export{};
console.log("Enter the current number: ");
let currentNumber:number=Number(process.argv[2]);
if(currentNumber%2!=0){
    currentNumber=3*currentNumber+1;
}
else{
    currentNumber=currentNumber/2;
}
console.log(currentNumber);