const fetch = require("node-fetch");
const clean = require("./intSorter");

//a function that reaches out to the URL provided, then calls on another function to manipulate the data inside
function grab(url) {
  fetch(url)
    .then((res) => res.text())
    .then((text) => {
      console.log(clean(text)); // passing out cleanup function a string
    });
}

module.exports = grab;
