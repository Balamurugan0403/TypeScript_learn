export {};
console.log("Enter a list of product names separated by commas:");
let product:string=String(process.argv[2]);
let products:string[]=product.split(",");
for(let i=0;i<products.length;i++){
    console.log(products[i]);
}