export {} ;
function somefn() {
    if (true) {
        var localvar = 1000;
        console.log(localvar); // 1000
    }

    console.log(localvar); // 1000

    function nested() {
        console.log(localvar); // 1000
    }

    nested();
}

somefn();


let greeter="hey hi";
let times=5;
if(times>3){
    let hello="hello ram"

    console.log(hello);
}
//console.log(hello);


function varGreeter(){
    var a=10;
    var a=20;
    console.log(a); // 20   
}
varGreeter();

// function varGreeter2(){
//     let a=10;
//     let a=20;
//     console.log(a); // 20   
// }
// varGreeter2();


// {
//     console.log(c); //undefined due to hoisting of var  
//     var c=2;
// }

// {
//     console.log(d); //reference error 
//     let d=2;
// }
let userName="john";
let userAge=42;
userName="jane";
function greet(name:string):string{
    return "Hello, "+name;
}
//const result:number=greet(userName)

