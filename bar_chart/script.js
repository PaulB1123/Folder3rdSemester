"use strict";

const model = [];
let conter = 0;
console.log(counter);

window.addEventListener("DOMContentLoaded", load());

function load() {
  let bar = document.querySelectorAll(".bar");
  console.log(bar);
  getNumberOfCustomers();

  bar.setAttribute("style", "height:60%");
}

// function loop() {}

function getNumberOfCustomers() {
  if (counter < 40) {
    model.unshift(counter);
  } else {
    model.unshift(counter);
    model.pop(-1);
  }
  console.log(model);
  counter++;
  setTimeout(getNumberOfCustomers, 1800);
  return Math.floor(Math.random() * 32);
}

// console.log(arr);

function displayData() {
  //   const queueSize = getNumberOfCustomers();
}

function modifyModel() {}
