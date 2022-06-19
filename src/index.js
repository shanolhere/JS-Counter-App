/*
      <span class="result">0</span>
        <button class="decrement">Decrement</button>
        <button class="Reset">Reset</button>
        <button class="increment">Increment</button>
        */
const resultText = document.querySelector(".result");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const increment = document.querySelector(".increment");

let count = 0;
decrement.addEventListener("click", () => {
  count = count - 1;
  //resultText.textContent = count;
  if (count < 0) {
    resultText.style.color = "red";
  } else {
    resultText.style.color = "green";
  }
  resultText.textContent = count;
});
increment.addEventListener("click", () => {
  count = count + 1;
  if (count < 0) {
    resultText.style.color = "red";
  } else {
    resultText.style.color = "green";
  }
  resultText.textContent = count;
});
reset.addEventListener("click", () => {
  count = 0;
  resultText.style.color = "black";
  resultText.textContent = count;
});
