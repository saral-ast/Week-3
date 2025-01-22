// "use strict"
let name = "saral"
let value = name

let user= {
    name: "saral",
    mobileNO: +919999999999
}
let user2 = user
if(name == value && user == user2) {
    // alert("true")
}
function checkThis(name, value) {
    // console.log(this)
    // console.log(this.name)
    // console.log(this.value)
    console.log(name)   
    console.log(value) 
}
checkThis("hi","hello") 


let calculator = {
    // ... your code ...
    // a:0,
    // b:0,
    read() {
      this.a = +prompt('a?', 1);
      this.b = +prompt('b?', 0);
      console.log(this.a)
      console.log(this.b)
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
  };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

//   alert( parseInt('103s0apx') ); // 100
// alert( parseFloat('a12.5em') ); // 12.5

// alert( parseInt('12.3') ); // 12, only the integer part is returned
// alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading


function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
//   alert( checkSpam('buy ViAgRA now') );
//   alert( checkSpam('free xxxxx') );
//   alert( checkSpam("innocent rabbit") 
// 
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]);


function filterRangeInPlace(arr, a, b) {
    for(let i =0;i < arr.length;i++){
        if(arr[i] < a || arr[i] > b) {
            arr.splice(i,1)
            i--
        }
    }
}