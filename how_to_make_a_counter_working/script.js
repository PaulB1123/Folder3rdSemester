"use strict";
window.addEventListener("DOMContentLoaded", loop);

const arr = [];
let counter = 0;

function loop() {
  if (counter < 9) {
    arr.unshift(counter);
  } else {
    arr.unshift(counter);
    arr.pop(-1);
  }
  console.log(arr);
  setTimeout(loop, 900);
  counter++;
}

console.log(arr);
