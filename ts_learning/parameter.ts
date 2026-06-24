export {} ;
function showdetails(id:number,name:string,email?:string){
    console.log("Id",id,"Name",name);
    if(email!=undefined){
        console.log("Email",email);
    }
}

showdetails(1,"John");
showdetails(2,"Jane","janezz3gmail.com");

function displayName(name:string,greeting:string="hello"){
    return greeting+" "+name+"!";
}

console.log(displayName("John"));
console.log(displayName("Jane","Hi"));
console.log(displayName("Bob"));

function sum1(a:number,...b:number[]):number{
    let result = a;
    for(let i=0;i<b.length;i++){
        result += b[i];
    }
    return result;
}

let result1 = sum1(10,20);
let result2 = sum1(12,3,4,5,5);

console.log(result1);
console.log(result2);

let sum2=(x:number,y:number):number =>{
    return x+y;
}
sum2(10,30);



function funover(a:string,b:string):string;
function funover(a:number,b:number):number;
function funover(a:any,b:any):any{
    return a+b;
}

console.log(typeof(funover("hello","20")));
console.log(typeof(funover("hello","john")));
console.log(typeof(funover(10,42)));