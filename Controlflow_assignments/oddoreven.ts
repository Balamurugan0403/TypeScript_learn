export{};
console.log("Enter a number: ");
let num:number=Number(process.argv[2]);
if(num%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}