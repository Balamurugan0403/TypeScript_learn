export{};
console.log("Enter the length: ");
let length:number=Number(process.argv[2]);
console.log("Enter the breadth: ");
let breadth:number=Number(process.argv[3]);
if(length==breadth){
    console.log("Square");
}
else{
    console.log("Not a Square");
}