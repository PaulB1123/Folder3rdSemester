"use strict";

window.addEventListener("load", init);

const model = [];
let i = 0;

function init() {
  i = 0;

  let chartContainer = document.querySelector(".chartContainer");

  for (let i = 0; i < 40; i++) {
    let chartBar = document.createElement("div");
    chartBar.classList.add("bar");
    chartContainer.appendChild(chartBar);
  }

  for (let i = 0; i < 40; i++) {
    model.push(getNumberOfCustomers());
  }

  loop();
}

function loop() {
  displayData();
  modifyModel();
  if (i < 60) {
    i++;
    setTimeout(loop, 250);
  } else {
    console.log("Loop finished");
  }
  setTimeout(loop, 500);
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function displayData() {
  let barsArray = document.querySelectorAll(".bar");
  console.log("display data is called");

  for (let i = 0; i < barsArray.length; i++) {
    // console.log(barsArray[i]);
    barsArray[i].style.height = (model[i] * 100) / 32 + "%";
    console.log("taking data and displaying");
  }
}

function modifyModel() {
  // console.log('modifying model');
  // model.shift(0);
  // model.push(getNumberOfCustomers());

  if (model.length < 40) {
    model.push(getNumberOfCustomers());
  } else {
    model.shift(0);
    model.push(getNumberOfCustomers());
  }
}
