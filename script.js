console.log("Starting script.js");    // printing in console


// alert("Hello world!") // alert
// [1, 2].forEach(alert)   - it gives error because semicolun is not after one alert


/* it is a multiple
  lie cometns
  works*/

let name = "Hello world!"
var script = "script.js"  //block scpoe issue 
const lastName = "Doe"  //you can't change its' value

{
    let name = "Hello world!- block" //both name variable is diffrent
    var script = "script.js-new" // here it overwrites the value and it's same for whole file 
    // console.log(name,script,lastName) 
}
// console.log(name,script,lastName) //

