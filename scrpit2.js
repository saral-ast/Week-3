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
        alert(i);
    }
}