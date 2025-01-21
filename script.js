console.log("Starting script.js");    // printing in console


// alert("Hello world!") // alert
// [1, 2].forEach(alert)   - it gives error because semicolun is not after one alert


/* it is a multiple
  lie cometns
  works*/

alert("Hello world!") ;
const resultPrommpt = prompt("What's Your Age",0) ;  // Prompt takes two values tile and default value
    console.log(result) ;

const result = confirm("Are you sure?") ;  // Confirm box if you click ok it returns true and if you click cancel it returns false 
console.log(result) ;   


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
console.log(9007199254740991 + 1); // 9007199254740992  - bigInt


let dataTypes;
    console.log(typeof dataTypes); // undefined
    console.log(typeof 0); // number
    console.log(typeof 10n); // bigint
    console.log(typeof true); // boolean
    console.log(typeof "hello"); // string
    console.log(typeof Symbol("id")); // symbol
    console.log(typeof Math); // object
    console.log(typeof null); // object
    // use typeof for identify datatypes
