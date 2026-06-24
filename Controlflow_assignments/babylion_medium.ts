export{};
console.log("Enter the total number of animals: ");
let total:number=Number(process.argv[2]);
console.log("Enter the number of rabbits: ");
let rabbits:number=Number(process.argv[3]);
console.log("Enter the number of deer: ");
let deer:number=Number(process.argv[4]);
console.log("Enter the number of birds: ");
let birds:number=Number(process.argv[5]);
console.log("Enter the number of squirrels: ");
let squirrels:number=Number(process.argv[6]);

let count:number=rabbits+deer+birds+squirrels;

if(count>total){
    console.log("Counted wrongly");
}
else if(count<total){
    console.log("Baby lion is mischievous");
}
else{
    console.log("Baby lion is well behaved");
}