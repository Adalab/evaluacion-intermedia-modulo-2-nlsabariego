"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const numberInput = document.querySelector(".js-input-number");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");

function handleFormSubmit(event) {
  event.preventDefault();
  compareNumber();
}

function compareNumber() {
  let numberInputValue = parseInt(numberInput.value);
  if (numberInputValue > 100 || numberInputValue < 0) {
    clue.innerHTML = "Pista: El número debe estar entre 0 y 100";
  } else if (randomNumber < numberInputValue) {
    clue.innerHTML = "Pista: Demasiado alto!!";
  } else if (randomNumber > numberInputValue) {
    clue.innerHTML = "Pista: Demasiado bajo!!";
  } else if (randomNumber === numberInputValue) {
    clue.innerHTML = "Pista: Has ganado CAMPEONA!!!";
  }
}

button.addEventListener("click", handleFormSubmit);
