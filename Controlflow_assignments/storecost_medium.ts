export{};
console.log("Enter the customer name: ");
let name:string=process.argv[2];
console.log("Enter the number of items: ");
let items:number=Number(process.argv[3]);

let cost:number;

if(items<10){
    cost=items*12;
}
else if(items<100){
    cost=items*10;
}
else{
    cost=items*7;
}

console.log(name+" "+cost);