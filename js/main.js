"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(getRandomNumber(100));

const numberInput = document.querySelector(".js-input-number");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");

function handleFormSubmit(event) {
  event.preventDefault();
  compareNumber();
}

function compareNumber() {
  let numberInputValue = parseInt(numberInput.value);
  console.log(numberInputValue);
  if (numberInputValue > 100 || numberInputValue < 0) {
    clue.innerHTML += "El número debe estar entre 0 y 100";
  } else if()
}

button.addEventListener("click", handleFormSubmit);
