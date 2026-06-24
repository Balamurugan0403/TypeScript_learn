export{};
console.log("Enter the price of the first item: ");
let price1:number=10;
console.log("Enter the quantity of the first item: ");
let quantity1:number=3;
console.log("Do you want to enter another item? (yes/no): ");
let choice1:string="yes";

let totalPrice:number=price1*quantity1;

if(choice1=="yes"){
    console.log("Enter the price of the second item: ");
    let price2:number=15;
    console.log("Enter the quantity of the second item: ");
    let quantity2:number=2;
    console.log("Do you want to enter another item? (yes/no): ");
    let choice2:string="yes";

    totalPrice+=price2*quantity2;

    if(choice2=="yes"){
        console.log("Enter the price of the third item: ");
        let price3:number=20;
        console.log("Enter the quantity of the third item: ");
        let quantity3:number=2;
        console.log("Do you want to enter another item? (yes/no): ");
        let choice3:string="no";

        totalPrice+=price3*quantity3;

        if(choice3=="yes"){
            console.log("Enter the price of the fourth item: ");
            let price4:number=30;
            console.log("Enter the quantity of the fourth item: ");
            let quantity4:number=2;

            totalPrice+=price4*quantity4;
        }
    }
}

console.log("Total Price: "+totalPrice);