export{};

console.log("Enter the radius of the circle: ");
let radius:number=Number(process.argv[2]);

console.log("Enter the angle in degrees (for sector area): ");
let angle:number=Number(process.argv[3]);

let diameter:number=2*radius;
let circumference:number=2*Math.PI*radius;
let sectorArea:number=(angle/360)*Math.PI*radius*radius;
let arcLength:number=(angle/360)*circumference;

console.log("Radius: "+radius);
console.log("Diameter: "+diameter);
console.log("Circumference: "+circumference);
console.log("Sector Area for "+angle+" degrees: "+sectorArea);
console.log("Arc Length for "+angle+" degrees: "+arcLength);