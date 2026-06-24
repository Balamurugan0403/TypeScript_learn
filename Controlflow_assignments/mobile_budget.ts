export{};
console.log("Enter the mobile cost: ");
let cost:number=Number(process.argv[2]);
if(cost<=15000){
    console.log("Mobile chosen is within the budget");
}
else{
    console.log("Mobile chosen is beyond the budget");
}