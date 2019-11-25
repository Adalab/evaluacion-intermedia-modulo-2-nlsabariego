"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const numberInput = document.querySelector(".js-input-number");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const triedNumber = document.querySelector(".js-tried-number");

let tried = 0;

function handleFormSubmit(event) {
  event.preventDefault();
  compareNumber();
  sumTried();
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

function sumTried() {
  tried = tried + 1;
  triedNumber.innerHTML = `Número de intentos: ${tried}`;
}

button.addEventListener("click", handleFormSubmit);
