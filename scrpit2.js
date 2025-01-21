// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

// let userNAme = prompt("Who's There?","");
// console.log(userNAme);


// if(userNAme == "Admin"){
//     let password = prompt("Enter Your Password","");
//     if(password == "TheMaster"){
//         alert("Welcome!");
//     } else {
//         alert("Wrong-Password");
//     }
// }
// else if(userName =="" || userName == null){
//     alert("Canceled");
// } 
// else { 
//     alert("I don’t know you");
// }

// let login = (userNAme == "Admin") ? (prompt("Enter Your Password","") == "TheMaster" ) ? alert("Welcome!") : alert("Wrong-Password") : 
// userNAme == "" || userNAme == null ? alert("Canceled") : 
// alert("I don’t know you"); 

// Use the for loop to output even numbers from 2 to 10

for(let i = 1; i <= 10; i++){
    // alert(!(i%2))
    if(/*!(i % 2)*/ i%2 == 0){
        // console.log(i);
        // alert(i);
    }
}

let i =0;
while(i < 3){
    // console.log(i);
    // alert(`number ${i}`);
    i++;
}



// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.


//answer
// let numberValue = prompt("Enter a number greater than 100","");

// while(numberValue <= 100 && numberValue != null){
//     numberValue = prompt("Enter a number greater than 100","");
// }
// console.log(numberValue);


//prime numbers printing

let number = prompt("Enter a number greater than 1","");
let primeNumber = true;

for(let i = 2; i<=number; i++){
    primeNumber = true;
     for(let j = 2; j < i; j++){
        if(i%j == 0){
            primeNumber = false;
            break
        }
        // console.log(i);
    }
    if(primeNumber){
        console.log(i);
    }
}

