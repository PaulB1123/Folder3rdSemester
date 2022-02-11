"use strict";

//////// exercise 1 //////////
//////// From 0 to 9 //////////
console.log("From 0 to 9");
for (let counter = 0; counter < 10; counter++) {
  console.log("number is: ", counter);
}

console.log("");

//////// exercise 2 //////////
//////// From 1 to 10 //////////
console.log("From 1 to 10");
let number2 = 1;

for (number2 = 1; number2 <= 10; number2++) {
  console.log("number for second exercise is: ", number2);
}
console.log("");

//////// exercise 3 //////////
//////// From 10 to 0 //////////
console.log("From 10 to 0 ");

let number3 = 10;

for (number3 = 10; number3 > -1; number3--) {
  console.log("number for third exercise is: ", number3);
}

console.log("liftoff");
console.log("");

//////// exercise 4 //////////
//////// From 10 to 0, and after 0 it console.logs the text: "liftoff"  //////////

console.log("From 10 to 0, and after 0 it console.logs the text:liftoff");

for (let number4 = 1; number4 < 20; number4 += 2) {
  console.log("number for forth exercise is: ", number4);
}

console.log("");

//////// exercise 5 //////////
//////// From 1 to 16777216, but only counts off numbers  //////////
console.log("From 1 to 16777216, but only counts off numbers");

for (let number5 = 1; number5 <= 16777216; number5 *= 2) {
  console.log("number for thith exercise is: ", number5);
}

console.log("");

//////// exercise 6 //////////
//////// From 111 to 138, in steps of 3 //////////

console.log("From 111 to 138, in steps of 3");

for (let number6 = 111; number6 <= 138; number6 += 3) {
  console.log("number for sixth exercise is: ", number6);
}

console.log("");

//////// exercise 7 //////////
//////// From 100 down to 0 in steps of 10  //////////

console.log("From 100 down to 0 in steps of 10");

for (let number7 = 100; number7 > -1; number7 -= 10) {
  console.log("number for seventh exercise is: ", number7);
}

console.log("");
