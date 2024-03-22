"use strict";

function changeColor() {
  let hex_numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let hexCode = "";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.trunc(Math.random() * hex_numbers.length);
    hexCode += hex_numbers[randomIndex];
  }
  document.getElementById("hex-code").innerHTML = hexCode;
  document.getElementsByTagName("body")[0].style.background = "#" + hexCode;
}
