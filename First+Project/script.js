window.addEventListener("DOMContentLoaded", start);

function start() {
  loadProductType();
}

function loadProductType(prodType) {
  const url = "actors.json";
  console.log(url);

  fetch("actors.json")
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      handleData(data);
    })
    .catch((e) => {
      console.error("An error occured:", e.message);
    });
}

// var movie = document.getElementById("movie");
// movie.className += " hidden";
// clone the template that we have for the 3 elements

function handleData(data) {
  const mainSec = document.querySelector("main");
  mainSec.innerHTML = "";
  data.forEach((data) => {
    console.log(data);
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    clone.querySelector(".actor").textContent = "Actor: " + data.fullname;
    // clone.querySelector(".movie").textContent = data.movie;
    clone.querySelector(".actor").addEventListener("click", myFunction);
    // clone.querySelector(".movie").addEventListener("click", myFunction);
    mainSec.appendChild(clone);

    function myFunction() {
      alert("Movie:" + " " + data.movie);
    }
  });
}
