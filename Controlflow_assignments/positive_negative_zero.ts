export{};
console.log("Enter a number: ");
let num:number=Number(process.argv[2]);
if(num>0){
    console.log("Positive");
}
else if(num<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}