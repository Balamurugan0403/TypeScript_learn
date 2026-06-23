const inputrating=require("prompt-sync")();

let averageRating:number=inputrating("Enter average rating: ");
let roundedRating:number=Math.round(averageRating);
console.log("Rounded Rating: "+roundedRating);