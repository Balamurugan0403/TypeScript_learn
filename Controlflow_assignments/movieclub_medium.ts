export{};
console.log("Enter the age: ");
let age:number=Number(process.argv[2]);
if(age<0){
    console.log("Invalid Age");
}
else if(age<13){
    console.log("Cartoon Club");
}
else if(age<20){
    console.log("Teens Club");
}
else{
    console.log("Not Allowed");
}