export {};
function add(x: number, y: number): number {
    return x + y;
}
let sum = add(5, 6)
console.log("Sum of two numbers is: " + sum)


let myAdd = function (x: number, y: number): number {
    return x + y;
}
console.log(myAdd(10, 20))


function showdetails(id: number, name: string, email?: string) {
    console.log("Id", id, "Name", name);
    if (email != undefined) {
        console.log("Email", email);
    }
}                                   

showdetails(1, "John");             
showdetails(2, "Jane", "jane@gmail.com");


function displayName(name: string, greeting: string = "hello") {
    return greeting + " " + name + "!";
}
console.log(displayName("John"));
console.log(displayName("Jane", "Hi"));
console.log(displayName("Bob"));

