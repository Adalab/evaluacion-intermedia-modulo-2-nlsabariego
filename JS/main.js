function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(getRandomNumber(100));

const numberInput = document.getElementById("number");
var number = numberInput.innerHTML;

const button = document.querySelector(".js-button");

function showNumber() {
  console.log(number);
}

function handleFormSubmit(event) {
  event.preventDefault();
}

button.addEventListener("click", handleFormSubmit, showNumber);

const clue = document.querySelector(".js-clue");

function pista() {
    if () 
}