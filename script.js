let counter = 0;

const resultText = document.getElementById("result_text");
const buttonIncrease = document.getElementById("button_increase");
const buttonDecrease = document.getElementById("button_decrease");
const buttonReset = document.getElementById("button_reset");

function increaseCounter() {
  counter++;
  return counter;
}

function decreaseCounter() {
  if (counter > 0) {
    counter--;
  }
  return counter;
}

buttonIncrease.addEventListener("click", () => {
  resultText.innerText = increaseCounter();
});

buttonDecrease.addEventListener("click", () => {
  resultText.innerText = decreaseCounter();
});

buttonReset.addEventListener("click", () => {
  counter = 0;
  resultText.innerText = counter;
});
