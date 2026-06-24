export{};
console.log("Enter the price of the item: ")
let price:number=Number(process.argv[2]);
console.log("Enter the quantity: ");
let cost:number=Number(process.argv[3]);
console.log("Total: $"+(price*cost).toFixed(2));