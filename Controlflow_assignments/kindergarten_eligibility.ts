export{};
console.log("Enter the age: ");
let age:number=Number(process.argv[2]);
if(age>=4){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}