console.log("Starting script.js");    // printing in console


// alert("Hello world!") // alert
// [1, 2].forEach(alert)   - it gives error because semicolun is not after one alert


/* it is a multiple
  lie cometns
  works*/

// alert("Hello world!") ;
// const resultPrommpt = prompt("What's Your Age",0) ;  // Prompt takes two values tile and default value
//     console.log(result) ;

// const result = confirm("Are you sure?") ;  // Confirm box if you click ok it returns true and if you click cancel it returns false 
// console.log(result) ;   


let name = "Hello world!"
var script = "script.js"  //block scpoe issue 
const lastName = "Doe"  //you can't change its' value

{
    let name = "Hello world!- block" //both name variable is diffrent
    var script = "script.js-new" // here it overwrites the value and it's same for whole file 
    // console.log(name,script,lastName) 
}
// console.log(name,script,lastName) //


// Data types
// console.log(9007199254740991 + 1); // 9007199254740992  - bigInt


// let dataTypes;
//     console.log(typeof dataTypes); // undefined
//     console.log(typeof 0); // number
//     console.log(typeof 10n); // bigint
//     console.log(typeof true); // boolean
//     console.log(typeof "hello"); // string
//     console.log(typeof Symbol("id")); // symbol
//     console.log(typeof Math); // object
//     console.log(typeof null); // object
//     // use typeof for identify datatypes


let str1 = "-1234            ";
str1 = Number(str1);
console.log(str1); // -1234

let str = "123 4";
str = Number(str);
console.log(str); // NaN

let booLean = true;
let booLean2 = false;
booLean = Number(booLean);
booLean2 = Number(booLean2);
console.log(booLean,booLean2); // 1 0

let Null = null;
Null = Number(Null);
console.log(Null); // 0

let Undefined;
Undefined = Number(Undefined);
console.log(Undefined); // NaN

let valueOf = 123;
valueOf = String(valueOf);
console.log(valueOf); // "123"

let valueOf2 = true;
valueOf2 = String(valueOf2);
console.log(valueOf2); // "true"

let valueOf3 = null;
valueOf3 = String(valueOf3);
console.log(valueOf3); // "null"



let valueOf4 = 123;
valueOf4 = Boolean(valueOf4);
console.log(valueOf4); // true

let valueOf5 = 0;
valueOf5 = Boolean(valueOf5);
console.log(valueOf5); // false

let valueOf6 = "hello";
valueOf6 = Boolean(valueOf6);
console.log(valueOf6); // true

let valueOf7 = "";
valueOf7 = Boolean(valueOf7);
console.log(valueOf7); // false